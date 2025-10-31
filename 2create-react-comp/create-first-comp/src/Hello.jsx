
function Hello() {
    // let myName = 'Janhvi';
    let number = 456;
    let fullName = () => {
        return 'Janhvi Gupta';
    }
  return <p>MessageNo: {number} I am your master {fullName()}</p>;
}

export default Hello;