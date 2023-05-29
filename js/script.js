

// ******************** скорость
let speeds = document.querySelector(`.speed h2`)
let btn_sped = document.querySelectorAll(`.btn_sped`)
let speed = 0
btn_sped.forEach(btn_s => {
    btn_s.onclick = () => {
        let str = btn_s.getAttribute(`data-speed`)
        if (str === `up`) {
            speed++
            speeds.innerHTML = `${speed}  км/ч`
        }
        else {
            speed--
            speeds.innerHTML = `${speed}  км/ч`
        }
    }
})


// *****************************

//*************** */ движение колёс
let circleElement = document.querySelector('.per');
let circleElement2 = document.querySelector('.zad');
let angle = 0;

function animateCircle() {
    angle -= speed; // Увеличиваем угол каждый шаг анимации

    circleElement.style.transform = 'rotate(' + angle + 'deg)'; // Поворачиваем элемент на заданный угол
    circleElement2.style.transform = 'rotate(' + angle + 'deg)'; // Поворачиваем элемент на заданный угол

    requestAnimationFrame(animateCircle); // Запускаем следующий шаг анимации

}

animateCircle();

// *******************  вид


let bnm = true
let perehod = document.querySelectorAll(`.perehod`)
let contain1 = document.querySelector(`.container`)
let contain2 = document.querySelector(`.container2`)
let promo = document.querySelector(`.container .promo`)
let promo2 = document.querySelector(`.container2 .promo`)
perehod.forEach(btn => {
    btn.onclick = () => {
        if (bnm) {
            setTimeout(() => {
                contain1.style.display = `none`
                contain2.style.display = `flex`
                promo2.style.transform = 'scale(25)';
            }, 1000);
            bnm = false
            promo.style.transition = 'transform 1s ease';
            promo.style.transform = 'scale(25)';
            promo.style.zIndex = '10';
            promo2.style.zIndex = '10';
            setTimeout(() => {
                promo2.style.transition = 'transform 1s ease';
                promo2.style.transform = 'scale(1)';
            }, 1100);


        }
        else {
            bnm = true
            setTimeout(() => {
                contain1.style.display = `flex`
                contain2.style.display = `none`
                promo.style.transform = 'scale(25)';
            }, 1000);

            promo2.style.transition = 'transform 1s ease';
            promo2.style.transform = 'scale(25)';
            promo2.style.zIndex = '10';
            promo.style.zIndex = '10';
            setTimeout(() => {
                promo.style.transition = 'transform 1s ease';
                promo.style.transform = 'scale(1)';
            }, 1100);
        }
    }
})

// ********************* цве салона 
let collors = {
    black: "./img/promo_1_black.svg",
    white: "./img/promo_1_white.svg",
    beige: "./img/promo_1_beige.svg"
}
let collor_b = document.querySelectorAll(`[data-color]`)
let bg_img2 = document.querySelector(`.container2 img`)
collor_b.forEach(col => {
    col.onclick = () => {
        let coll = col.getAttribute(`data-color`)
        bg_img2.src = collors[coll]
    }
})

// **********************************

// ********************* km 
let km = document.querySelector(`.motion h1 span`)
let km2 = document.querySelector(`.motion .zx2 span`)
// let kms = 750
kms = +km.innerHTML

//  ********************кондиционер 
let condElement = document.querySelector("#cond");
let con_el = 750
condElement.addEventListener("change", function () {
    let isChecked = condElement.checked;
    if (isChecked) {
        kms = kms / 100 * 75
        km.innerHTML = Math.round(kms * 10) / 10
        con_el = kms
    } else {
        kms = kms * 100 / 75
        km.innerHTML = Math.round(kms * 10) / 10
        con_el = kms
    }
    km2.innerHTML = km.innerHTML

});


// ************************************temp
let temps = document.querySelector(`.temper h2 span`)
let tempers = +temps.innerHTML
let btn_temp = document.querySelectorAll(`.btn_temp`)

btn_temp.forEach(btn_s => {
    btn_s.onclick = () => {
        let str = btn_s.getAttribute(`data-temp`)
        if (str === `up`) {
            tempers++
        }
        else {
            tempers--
        }
        let stri = Math.abs(tempers - 20)
        kms = con_el / 100 * (100 - (stri * 0.3))
        temps.innerHTML = tempers
        km.innerHTML = Math.round(kms * 10) / 10

    }
})
// ************************************ disk
let bol = document.querySelectorAll(`.boll`)
let per = document.querySelector(`.per`)
let zad = document.querySelector(`.zad`)


let discs = document.querySelector(`.disc h2`)
let btn_disc = document.querySelectorAll(`.btn_disc`)
let disc_rad = +discs.innerHTML
btn_disc.forEach(btn_s => {
    btn_s.onclick = () => {
        let str = btn_s.getAttribute(`data-dick`)
        if (str === `up`) {
            if (disc_rad < 23) {

                disc_rad += 4
                discs.innerHTML = disc_rad
                bol.forEach( el=>{

                    if (disc_rad === 23) {
                        el.style.width = `82px`
                        el.style.height = `82px`
                        per.style.right = `578px`
                        per.style.top = `239px`
                        zad.style.right = `237px`
                        zad.style.top = `240px`
                    }
                    else {
                        el.style.width = `80px`
                        el.style.width = `80px`
                        per.style.right = `579px`
                        per.style.top = `241px`
                        zad.style.right = `238px`
                        zad.style.top = `241px`
                    }
                })
            }
        }
        else {
            if (disc_rad > 15) {
                disc_rad -= 4
                discs.innerHTML = disc_rad

                bol.forEach( el=>{

                if (disc_rad === 15) {
                    el.style.width = `78px`
                    el.style.height = `78px`
                    per.style.right = `580px`
                    per.style.top = `242px`
                    zad.style.right = `239px`
                    zad.style.top = `242px`
                }
                else {
                    el.style.width = `80px`
                    el.style.width = `80px`
                    per.style.right = `579px`
                    per.style.top = `241px`
                    zad.style.right = `238px`
                    zad.style.top = `241px`
                }  
            })
            }
        }
    }
})
// **************************************
let range = document.querySelector("#range");
let price = document.querySelector(`.price h1`)
let price2 = document.querySelector(`.zx3`)
range.addEventListener("change", function() {
      let isChecked = range.checked;
      if (isChecked) {
        price.innerHTML = `$104, 990`
      } else {
        price.innerHTML = `$89, 990`

      }
      price2.innerHTML = price.innerHTML
    });
// *************************************