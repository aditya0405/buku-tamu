window.submitData = (event)=>{
    fetch('http://localhost:3000/data_tamu',{
    method :'POST',
    mode : 'cors',
    headers : {
        "Content-Type" : "application/json"
    },
    body : JSON.stringify({
        nama_lengkap : event.target.name.value,
        alamat : event.target.address.value,
        telpn : event.target.phone.value,
        
    })
    
})

}

const LeftSide =()=>{

    return `

        <div class="left_side">

            <div class="ls_text">
                <p>Pernikahan<p/>
                <h3>Dini & Andi</h3>
                <p>Balai Kartini, 42 juli 2021</p>
            </div>


            <form onsubmit="submitData(event)">
                    <label for="name">Nama</label>
                    <input type="text" id="name">
            
                    <label for="address">Alamat</label>
                    <input type="address" id="address">
            
                    <label for="phone">No Telp</label>
                    <input type="phone" id="phone">
            
                    <button type="submit">Submit</button>
            </form>
        
        </div>
  

    `
}

export default LeftSide