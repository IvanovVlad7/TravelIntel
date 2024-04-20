document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.product-for__button button');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      buttons.forEach(btn => {
        btn.classList.remove('primary');
        btn.classList.add('secondary');
      });

      this.classList.remove('secondary');
      this.classList.add('primary');
    });
  });
});



let travelersContent = document.getElementById('travelers-content');
let organizationContent = document.getElementById('organization-content');
let employeesContent = document.getElementById('employees-content');

let travelersContentMobile = document.getElementById('travelers-content-mobile');
let organizationContentMobile = document.getElementById('organization-content-mobile');
let employeesContentMobile = document.getElementById('employees-content-mobile');

function showContent(id) {
  travelersContent.style.display = id === 'travelers' ? 'flex' : 'none';
  organizationContent.style.display = id === 'organization' ? 'flex' : 'none';
  employeesContent.style.display = id === 'employees' ? 'flex' : 'none';

  travelersContentMobile.style.display = id === 'travelers' ? 'flex' : 'none';
  organizationContentMobile.style.display = id === 'organization' ? 'flex' : 'none';
  employeesContentMobile.style.display = id === 'employees' ? 'flex' : 'none';
}
  