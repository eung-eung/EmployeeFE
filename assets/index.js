var dropdownBtn = document.querySelector('.dropdown-btn')
var dropdownContents = document.querySelector('.dropdown-contents')

var employeeAction = document.querySelectorAll('.employee-action')
var dropdownContent = document.querySelectorAll('.dropdown-content')

dropdownBtn.addEventListener("click", () => {
    dropdownContents.classList.remove('open')
    dropdownBtn.classList.toggle('active')
    if (dropdownBtn.classList.contains('active'))
        dropdownContents.classList.add('open')
})

dropdownContent.forEach((dr, index) => {
    dr.addEventListener("click", function () {
        dropdownContent.forEach((_dr, _index) => {
            _dr.classList.remove('active')
            employeeAction[_index].classList.remove("active")
        })
        dr.classList.add("active")
        employeeAction[index].classList.add("active")


    })
})