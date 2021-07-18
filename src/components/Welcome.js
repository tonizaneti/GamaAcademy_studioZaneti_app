import { Component } from "react";



class Welcome extends Component{
    handleSubmit = (e) =>{
        e.preventDefault();
        const username = e.target.elements.username.value;
        const email = e.target.elements.email.value;
        localStorage.setItem('@studiozaneti_app/username', username);
        localStorage.setItem('@studiozaneti_app/email', email);
        window.location.reload();
    }

    handleLogout = () => {
        localStorage.removeItem('@studiozaneti_app/username');
        localStorage.removeItem('@studiozaneti_app/email');
        window.location.reload();
      }


    render(){
    const username = localStorage.getItem('@studiozaneti_app/username');
    const email = localStorage.getItem('@studiozaneti_app/email');

    if(username !== null){
        return (
            <div style = {styles.container}>
                <p><img src="./img/logo_studio_zaneti.jpg"  alt="Studio Zaneti"></img></p>
                <h1>Eternizando Seus Melhores Momentos!</h1>
                <p>Bem Vindo {username}!</p>
                <p>E-mail: {email}</p>
                <button onClick={this.handleLogout} style = {styles.submitButton}>Sair</button>
            </div>
        );

    }


    return(
        <form style={styles.container} onSubmit={this.handleSubmit}>
        <img src="./img/logo_studio_zaneti.jpg" alt="Studio Zaneti" ></img>
            <h1>Eternizando Seus Melhores Momentos!</h1>
            <p style={styles.blackfriday}>BLACK FRIDAY<br></br>
            Até 50%  OFF<br></br>
            <img src="./img/filme.jpg" width="80%"></img></p>
            <p style={styles.promocao}>FOTOGRAFIA DE CASAMENTO<br></br>
            Ensaios Românticos, Gestante, Família, Eventos!<br></br>
            Eternize seus melhores momentos com um super desconto!<br></br>
            Deixe seu e-mail para contato!</p>
            <p>Nome: <input style={styles.username} type="text" name="username" placeholder="Nome de Usuário" required /></p>
            <p>E-mail: <input style={styles.email} type="text" name="email" placeholder="E-mail" required /></p>
            <button type="submit" style={styles.submitButton}>Cadastrar Email</button>
        </form>
    );
}
}

const styles = {
    container: {
      display: 'flex',
      textAlign: 'center',
      flexDirection: 'column',
      minWidth: '300px',
      boxShadow: 'rgba(80, 250, 180, 0.1) 0px 0px 20px',
      background: 'rgb(155, 55, 185)',
      borderRadius: '4px',
      padding: '20px 10px',
      margin: '0px'
    },
    submitButton: {
      height: '40px',
      textAlign: 'center',
      alignItems: 'center',
      borderRadius: '4px',
      fontWeight: 'bold',
      fontSize: '14px',
      border: 0,
      color: '#fff',
      background: '#191577',
      marginTop: '5px',
    },
    username: {
      height: '40px',
      padding: '0 15px',
      border: '1px solid #eee',
      borderRadius: '4px',
      marginBottom: '0px',
      color: '#444'
    },
    promocao: {
        fontSize:'1em',
        color:'#ccc',
        background:'#922'
      },
      blackfriday: {
        fontSize:'1.5em',
        color:'#ddd',
        background:'#a22'
      },
    email: {
        height: '40px',
        padding: '0 15px',
        border: '1px solid #eee',
        borderRadius: '4px',
        marginBottom: '0px',
        color: '#444'
      }

  }

export default Welcome;

