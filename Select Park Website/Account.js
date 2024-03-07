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

/* Add car */
const carForm=document.getElementById('carform');
const carList=document.getElementById('car-list');


function addCarToList(licensePlate,carModel){
    const carItem=document.createElement('div');
    carItem.classList.add('caritem');
    carItem.innerHTML=`
    <span class="licenseplate">${licensePlate}</span>
    <span class="carmodel">${carModel}</span>
    <button class="editbtn">Edit</button>
    <button class="removebtn">Remove</button>
    
    `;
    carList.appendChild(carItem);

    const Edit=carItem.querySelector('.editbtn');
    const Remove=carItem.querySelector('.removebtn');

    Edit.addEventListener('click',function(){
document.getElementById('licenseplate').value=licensePlate;
document.getElementById('carmodel').value=carModel;
carForm.dataset.editId=Array.from(carList.children).indexOf(carItem);
document.querySelector('.editbtn').textContent='Save Changes';
    });

    Remove.addEventListener('click',function(){
        carList.removeChild(carItem);
    });
}

carForm.addEventListener('submit',function(event){
    event.preventDefault();
    const licensePlate=document.getElementById('licenseplate').value;
    const carModel=document.getElementById('carmodel').value;
    const editId=carForm.dataset.editId;
    
    if(editId !==undefined){
        const carItem=carList.children[editId];
    carItem.querySelector('.licenseplate').textContent=licensePlate;
    carItem.querySelector('.carmodel').textContent=carModel;
    document.querySelector('button[type="submit"]').textContent='Add Car';
    delete carForm.dataset.editId;
    }
    else{
        addCarToList(licensePlate,carModel);
    }
    carForm.reset();
    });

/* Add debit/credit card */

const CardForm=document.getElementById('CardForm');
const CardList=document.getElementById('Card-List');

function addCardToList(DebitCreditCard, MMYY, CVV){
    const cardItem=document.createElement('div');
    cardItem.classList.add('carditem');
    cardItem.innerHTML=`

        <span "class="DCC">${DebitCreditCard}</span>
        <span class="DCCDate">${MMYY}</span>
        <span class="CVV">${CVV}</span>
     
    `;

    CardList.appendChild(cardItem);

    const Edit=cardItem.querySelector('.editbtn');
    const Remove=cardItem.querySelector('.removebtn');

    Edit.addEventListener('click',function(){
document.getElementById('DCC').value=DebitCreditCard;
document.getElementById('DCCDate').value=MMYY;
document.getElementById('CVV').value=CVV;
CardForm.dataset.editId=Array.from(CardList.children).indexOf(CardItem);
document.querySelector('.editbtn').textContent='Save Changes';
    });

    Remove.addEventListener('click',function(){
        CardList.removeChild(cardItem);
    });
}

CardForm.addEventListener('submit',function(event){
    event.preventDefault();
    const DebitCreditCard=document.getElementById('DCC').value;
    const MMYY=document.getElementById('DCCDate').value;
    const CVV=document.getElementById('CVV').value;
    const editId=CardForm.dataset.editId;
    
    if(editId !==undefined){
        const CardItem=CardList.children[editId];
    CardItem.querySelector('.DCC').textContent=DebitCreditCard;
    CardItem.querySelector('.DCCDate').textContent=MMYY;
    CardItem.querySelector('.CVV').textContent=CVV;
    document.querySelector('button[type="submit"]').textContent='Add Card';
    delete CardForm.dataset.editId;
    }
    else{
        addCardToList(DebitCreditCard, MMYY, CVV);
    }
    CardForm.reset();
    });

