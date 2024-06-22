
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('urlform').addEventListener('submit', function(e) {
        e.preventDefault();
        const lastModifiedDate = document.getElementById('dob').value;
        const resultDiv = document.getElementById('age');

        if (!lastModifiedDate) {
            alert('Please enter a valid date');
            return;
        }

        const lastModified = new Date(lastModifiedDate);
        const currentDate = new Date();

        let years = currentDate.getFullYear() - lastModified.getFullYear();
        let months = currentDate.getMonth() - lastModified.getMonth();
        let days = currentDate.getDate() - lastModified.getDate();

        if (days < 0) {
            months -= 1;
            days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        }

        if (months < 0) {
            years -= 1;
            months += 12;
        }

        resultDiv.textContent = `${years} years ${months} months ${days} days`;
    });
});