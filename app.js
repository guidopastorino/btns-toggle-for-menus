const btns = document.querySelectorAll('button')

btns.forEach(btn => {
    btn.addEventListener('click', e => {
        e.target.classList.toggle('btn-active')
        
        if(e.target.classList.contains('btn-active')){
            
            btns.forEach(btn2 => {
                btn2.classList.remove('btn-active')
            })


            e.target.classList.toggle('btn-active')
        }
    })
})