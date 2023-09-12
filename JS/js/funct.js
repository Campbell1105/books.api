
const people = [
    {
        name: 'bill',
        age: 36,
        isEmployed: true,
        occupation: 'software engineer'
    },
    {
        name: 'ashley',
        age: 28,
        isEmployed: false,
        occupation: 'software engineer'
    },
    {
        name: 'ryan',
        age: 16,
        isEmployed: false,
        occupation: ''
    },
    {
        name: 'jill',
        age: 17,
        isEmployed: true,
        occupation: 'dog walker'
    }
]

people.forEach(person => {
       console.log(person.name) 
    
});
const employedPeople = people.filter(person => {
    return person.isEmployed
})
 console.log

 let monthlyProfitLabels = [ 'January: 5', 'February: -1', 'March: 12' ]
let monthList = document.querySelector('.month-list')




for(let i = 0; i < monthlyProfitLabels.length; i++){
    let label = monthlyProfitLabels[i]
    let monthLi = document.createElement('li')
    monthLi.textContent = label
    monthList.append(monthLi)
}

