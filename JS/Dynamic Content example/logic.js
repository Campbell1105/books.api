
function createWarrantyPage(){   

    let element;
    let label;

    element = document.createElement('h3');
    element.innerHTML = '<h3>WhirlWind Warranty Registration<h3>'
    document.body.appendChild(element);   

    element = document.createElement('p');
    element.innerHTML = '<p>Streamline the repair process by completing your warranty registration today.<p>'
    document.body.appendChild(element);    

    element = document.createElement('h2');
    element.innerHTML = 'Contact Information'
    document.body.appendChild(element);    

    label = document.createElement('label');
    label.innerHTML = "First Name"
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", "text")    
    document.body.appendChild(element);    
    
    label = document.createElement('label');
    label.innerHTML = "Last Name"
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", "text")
    element.innerHTML = 'Last Name'
    document.body.appendChild(element);
    
    label = document.createElement('label');
    label.innerHTML = "Company Name"
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", "text")
    element.innerHTML = 'Company Name'
    document.body.appendChild(element);    

    label = document.createElement('label');
    label.innerHTML = "Email"
    document.body.appendChild(label);    
    element = document.createElement('input');
    element.setAttribute("type", "text")
    element.innerHTML = 'Email'
    document.body.appendChild(element);
    
    label = document.createElement('label');
    label.innerHTML = "Phone Number"
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", "text")
    element.innerHTML = 'Phone Number'
    document.body.appendChild(element);
    
    label = document.createElement('label');
    label.innerHTML = "Fax Number"
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", "text")
    element.innerHTML = 'Fax Number'
    document.body.appendChild(element);
    
    label = document.createElement('label');
    label.innerHTML = "Address"
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", "text")
    element.innerHTML = 'Address'
    document.body.appendChild(element);
    
    label = document.createElement('label');
    label.innerHTML = "City"
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", "text")
    element.innerHTML = 'City'
    document.body.appendChild(element);
    
label = document.createElement('label');
    label.innerHTML = "State"
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", "text")
    element.innerHTML = 'State'
    document.body.appendChild(element);
    
    label = document.createElement('label');
    label.innerHTML = "Zip"
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", "text")
    element.innerHTML = 'Zip'
    document.body.appendChild(element);
    
    label = document.createElement('label');
    label.innerHTML = "Country"
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", "text")
    element.innerHTML = 'Country'
    document.body.appendChild(element);
    
    label = document.createElement('label');
    label.innerHTML = "Unit Information"
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", "text")
    element.innerHTML = 'Unit Information'
    document.body.appendChild(element);
    
    label = document.createElement('label');
    label.innerHTML = "Date of Purchase"
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", "text")
    element.innerHTML = 'Date Of Purchase'
    document.body.appendChild(element);
    
    label = document.createElement('label');
    label.innerHTML = "Model"
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", "text")
    element.innerHTML = 'Model'
    document.body.appendChild(element);
    
    label = document.createElement('label');
    label.innerHTML = "Warranty Serial Number"
    document.body.appendChild(label);
    element = document.createElement('input');
    element.setAttribute("type", "text")
    element.innerHTML = 'Warranty Serial Number'
    document.body.appendChild(element);    

    element = document.createElement('input');
    element.setAttribute("type", "button")
    element.setAttribute("value", "Save")    
    document.body.appendChild(element);    

    element = document.createElement('input');
    element.setAttribute("type", "button")
    element.setAttribute("value", "Close")    
    document.body.appendChild(element); 

}  