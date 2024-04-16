document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registrationForm");
    const registrationTableBody = document.getElementById("registrationBody");

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const firstNameInput = document.getElementById('firstName');
        const lastNameInput = document.getElementById('lastName');

        if (isEmpty(firstNameInput.value)) {
            alert("Please add first name");
            return;
        }

        if (isEmpty(lastNameInput.value)) {
            alert("Please add last name");
            return;
        }
        
        addRegistration(firstNameInput.value, lastNameInput.value);
        resetForm(firstNameInput, lastNameInput);
    });

    registrationTableBody.addEventListener('click', function(event) {
        const target = event.target;
        if (target.classList.contains('removeMe')) {
            if (confirm("Are you sure you want to delete this entry?")) {
                removeRow(target);
                alert("Entry deleted successfully.");
            }
        } else if (target.classList.contains('editMe')) {
            editRow(target);
            alert("Edit entry");
        }
    });

    function isEmpty(value) {
        return value.trim() === '';
    }

    function addRegistration(firstName, lastName) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${firstName}</td>
                            <td>${lastName}</td>
                            <td><button class="removeMe"><i class="fas fa-trash-alt"></i></button><button class="editMe"><i class="fas fa-edit"></i></button></td>`;
        registrationTableBody.appendChild(newRow);
    }
    

    function resetForm(firstNameInput, lastNameInput) {
        firstNameInput.value = "";
        lastNameInput.value = "";
    }

    function removeRow(target) {
        target.closest('tr').remove();
    }

    function editRow(target) {
        const currentRow = target.closest('tr');
        document.getElementById('firstName').value = currentRow.querySelector('td:first-child').textContent;
        document.getElementById('lastName').value = currentRow.querySelector('td:nth-child(2)').textContent;
    }
});
