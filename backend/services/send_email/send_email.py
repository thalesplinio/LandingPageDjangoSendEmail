import os
import pathlib
from dotenv import load_dotenv
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from string import Template
import smtplib


class EnviarEmailSMTP:
    """
        Classe responsável por enviar emails SMTP com templates HTML.
    """

    def __init__(self):
        # Carregar variáveis de ambiente
        load_dotenv()

        # Caminhos e configurações
        self.caminho_html = pathlib.Path(
            __file__).parent / "template.html"

        # Dados do remetente e destinatário
        self.remetente = os.getenv("FROM_EMAIL", "")

        # Configurações SMTP
        self.smtp_server = os.getenv("SMPT_SERVER")
        self.smtp_port = os.getenv("SMTP_PORT")
        self.smtp_username = self.remetente
        self.smtp_password = os.getenv("EMAIL_PASSWORD")

        # TÍTULO DO E-MAIL
        self.titulo_email = os.getenv("TITULO_EMAIL")

    def carregar_template_html(self):
        with open(self.caminho_html, "r") as arquivo:
            texto_arquivo = arquivo.read()
        template = Template(texto_arquivo)
        return template

    def substituir_variaveis_template(self, template, nome_recebedor):
        return template.substitute(
            nome_recebe=nome_recebedor,
        )

    def enviar_email(self, nome_recebedor, email_destinatario):
        """Método responsável por enviar o email, passe os dados necessário
        para o envio correto!

        Args:
            nome_recebedor (String): Informe o nome da pessoa que deseja 
                enviar o email
            email_destinatario (String): Informe o e-mail da pessoa que vai 
                receber o email
        """
        # Carregar template e substituir variáveis
        template_html = self.carregar_template_html()
        texto_email = self.substituir_variaveis_template(
            template_html,
            nome_recebedor,
        )

        # Criar mensagem MIME
        mensagem_mime = MIMEMultipart()
        mensagem_mime["From"] = self.remetente
        mensagem_mime["To"] = email_destinatario
        mensagem_mime["Subject"] = self.titulo_email
        mensagem_mime['Ata']

        # Adicionar corpo de texto e anexo de imagem
        corpo_email = MIMEText(texto_email, "html", "utf-8")
        mensagem_mime.attach(corpo_email)

        # Enviar o e-mail
        with smtplib.SMTP(self.smtp_server, self.smtp_port) as server:
            server.ehlo()
            server.starttls()
            server.login(self.smtp_username, self.smtp_password)
            server.send_message(mensagem_mime)
        # print("E-mail enviado com sucesso!")


if __name__ == "__main__":
    enviador_email = EnviarEmailSMTP()
    nome_recebedor = ""
    email_destino = ""
    enviador_email.enviar_email(nome_recebedor, email_destino)
