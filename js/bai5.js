const hienThiThongTin = () => {
    document.getElementById("myForm").addEventListener("submit", function(event) {
        const ten = document.getElementById('name').value;
        console.log(`name: ${ten}`);
        const email = document.getElementById('email').value;
        console.log(`email: ${email}`);
        const diaChi = document.getElementById('address').value; 
        console.log(`address: ${diaChi}`);
        const ghichu = document.getElementById('note').value;
        console.log(`note: ${ghichu}`);
        event.preventDefault();
        });  
    }  
hienThiThongTin();
