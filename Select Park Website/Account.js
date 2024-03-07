const imgDiv=document.querySelector('.user-img');
const img=document.querySelector('#photo');
const file=document.querySelector('#file');
const buttonupload=document.querySelector('#buttonupload');

window.onload=function(){
    const storedProfilePicURL=localStorage.getItem("profilePicURL");
    if(storedProfilePicURL){
        document.getElementById("photo").src=storedProfilePicURL;
    }
    else{
        document.getElementById("photo").src="Images/avatar.jpg";
    }
};

document.getElementById("file").addEventListener("change", function(event){
    const file=event.target.files[0];
    const reader=new FileReader();

    reader.onload=function(){
        const imageURL=reader.result;
        document.getElementById("photo").src=imageURL;

        localStorage.setItem("profilePicURL", imageURL);

    };
    reader.readAsDataURL(file);
});

document.getElementById("removeprofilepic").addEventListener("click", function(){
    document.getElementById("photo").src="Images/avatar.jpg";
    localStorage.removeItem("profilePicURL");
});

document.getElementById("saveprofilepic").addEventListener("click", function(){
    const currentProfilePicURL=document.getElementById("photo").src;

    alert("Profile picture saved" );
});






document.addEventListener('DOMContentLoaded', function () {
    const carForm = document.getElementById('carForm');
    const carList = document.getElementById('list');
  
    carForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const licensePlate = document.getElementById('licensePlate').value;
      const carModel = document.getElementById('carModel').value;
      addCar(licensePlate, carModel);
      carForm.reset();
    });
  
    function addCar(licensePlate, carModel) {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        License Plate: ${licensePlate}, Car Model: ${carModel}
        <button class="edit">Edit</button>
        <button class="remove">Remove</button>
      `;
      carList.appendChild(listItem);
  
      listItem.querySelector('.edit').addEventListener('click', function () {
        const newLicensePlate = prompt('Enter new license plate:', licensePlate);
        const newCarModel = prompt('Enter new car model:', carModel);
        if (newLicensePlate && newCarModel) {
          listItem.innerHTML = `
            License Plate: ${newLicensePlate}, Car Model: ${newCarModel}
            <button class="edit">Edit</button>
            <button class="remove">Remove</button>
          `;
        }
      });
  
      listItem.querySelector('.remove').addEventListener('click', function () {
        listItem.remove();
      });
    }
  });














