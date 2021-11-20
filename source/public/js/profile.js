function menuprofile() {
    let menu_li_a = document.querySelectorAll('.content .content__profile .content__profile_sub-background .menu ul li a');
    menu_li_a[0].style.borderColor = '#333';
    menu_li_a[0].style.color = 'orange'; 
    menu_li_a.forEach((li, index) => {
        li.addEventListener('click', e =>{
            e.target.style.borderColor = "#333";
            e.target.style.color = "orange";
            console.log(e.target);
            menu_li_a.forEach((li, index2) =>{
                if(index2 != index)
                    li.removeAttribute('style');
            })
        }) 
    })
}

function genarateProfile() {
    let change_password_btn = document.getElementById('change-password-btn');
    let cancel_change_password_btn = document.getElementById('change-password-cancel-btn');
    let profile_content_id = document.getElementById('profile-content-id');
    let change_password_content_id = document.getElementById('change-password-content-id');
    change_password_content_id.style.display = "none";
    cancel_change_password_btn.addEventListener('click', e=>{
        profile_content_id.style.display = 'block';
        change_password_content_id.style.display = 'none';
    });
    change_password_btn.addEventListener('click', e=>{
        profile_content_id.style.display = 'none';
        change_password_content_id.style.display = 'block';

    })
}
genarateProfile();
menuprofile();