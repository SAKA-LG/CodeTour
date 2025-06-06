    const yearly = document.getElementById('year')
    const monthly = document.getElementById('month')
    const yearDiv = document.getElementById('year-div')
    const monthDiv = document.getElementById('month-div')

        const idr = document.getElementById('idr')
        const discount = document.getElementById('discount')

    yearly.addEventListener('click',()=>{
        yearDiv.classList.add('bg-white','text-black','p-2','rounded-2xl','element')
        monthDiv.classList.remove('bg-white','text-black')
        idr.textContent = '66240 IDR '
        discount.textContent = 'Save 36%'
    })
    
    monthly.addEventListener('click',()=>{
        monthDiv.classList.add('bg-white','text-black','p-2','rounded-2xl','element')
        yearDiv.classList.remove('bg-white','text-black')
        idr.textContent = '104635 IDR '
        discount.textContent = 'POPULAR'
    })

    const Joindgroup = document.getElementById('Joind-group')
    Joindgroup.addEventListener('click',()=>{
        window.location.href = "/odghusbjuasbdashbdhasbdhyuwybasbbhasjhduwd737jhabjsbMethodNgicvuiConsERorSerchBarUIPyPalMthodedDStRingK0987786Ides.html"
    }) 

