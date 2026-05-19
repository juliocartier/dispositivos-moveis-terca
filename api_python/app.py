from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from werkzeug.security import generate_password_hash

app = Flask(__name__)

CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///banco.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)

@app.route('/criar', methods=['POST'])
def criar_usuario():
    dados = request.get_json()

    if not dados or 'email' not in dados or 'password' not in dados:
        return jsonify({'erro': 'Dados incompletos. E-mail e password são obrigatórios.'}), 400

    email = dados['email']
    password = dados['password']

    if Usuario.query.filter_by(email=email).first():
        return jsonify({'erro': 'Este e-mail já está cadastrado.'}), 409

    senha_hash = generate_password_hash(password)
    novo_usuario = Usuario(email=email, password=senha_hash)
    
    db.session.add(novo_usuario)
    db.session.commit()

    return jsonify({
        'mensagem': 'Usuário registrado com sucesso!',
        'id': novo_usuario.id,
        'email': novo_usuario.email
    }), 201

@app.route('/listar_usuarios', methods=['GET'])
def listar_usuarios():
    usuarios = Usuario.query.all()
    resultado = [{'id': u.id, 'email': u.email} for u in usuarios]
    return jsonify(resultado), 200


@app.route('/atualizar_usuarios/<int:id>', methods=['PUT'])
def atualizar_usuario(id):
    usuario = Usuario.query.get(id)
    
    if not usuario:
        return jsonify({'erro': 'Usuário não encontrado.'}), 404

    dados = request.get_json()
    
    if not dados or 'email' not in dados:
        return jsonify({'erro': 'O campo e-mail é obrigatório para atualização.'}), 400

    novo_email = dados['email']

    email_existente = Usuario.query.filter(Usuario.email == novo_email, Usuario.id != id).first()
    if email_existente:
        return jsonify({'erro': 'Este e-mail já está em uso por outro usuário.'}), 409

    usuario.email = novo_email
    db.session.commit()

    return jsonify({'mensagem': 'Usuário atualizado com sucesso!'}), 200

@app.route('/deletar_usuario/<int:id>', methods=['DELETE'])
def deletar_usuario(id):
    usuario = Usuario.query.get(id)
    
    if not usuario:
        return jsonify({'erro': 'Usuário não encontrado.'}), 404

    db.session.delete(usuario)
    db.session.commit()

    return jsonify({'mensagem': 'Usuário deletado com sucesso!'}), 200


if __name__ == '__main__':
    # Cria o banco e as tabelas caso não existam
    with app.app_context():
        db.create_all()
    
    # Roda a API
    app.run(host='127.0.0.1', port=5009, debug=True)