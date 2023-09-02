function showGrade() {
   let average = document.getElementById('grade').value;

    if(average >= 90 && average <=94)
        alert('WITH HONORS');
    else if(average >= 95 && average <=98)
        alert('WITH HIGH HONORS');
    else if (average >= 99 && average <=100)
        alert('WITH HIGHEST HONORS');
    else
        alert('AVERAGE DOES NOT QUALIFY');

}   