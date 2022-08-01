// variables
let ratingContainer = document.getElementById('rating-container');
let thankYouContainer = document.getElementById('thank-you-container');
let submitBtn = document.getElementById('submit-btn');
let ratingText = document.getElementById('rating');
let rating = 0;

submitBtn.addEventListener('mouseup', ()=>{
    ratingContainer.style.display = 'none';
    thankYouContainer.style.display = 'block';
    ratingText.innerText='You selected '+rating+' out of 5';
})

for (let i = 1; i < 6; i++){
    let score = document.getElementById('rate-'+i);
    score.addEventListener('mouseup', ()=>{
        rating = i;
        score.style.backgroundColor = 'hsl(217, 12%, 63%)';
        score.style.color = 'white';
        for (let j = 1; j < 6; j++){
            if (j !== rating){
                document.getElementById('rate-'+j).style.backgroundColor = 'hsl(216, 17%, 23%)';
                document.getElementById('rate-'+j).style.color = 'hsl(217, 12%, 63%)';
            }
        }
    })
    score.addEventListener('mousedown', ()=>score.style.backgroundColor= 'hsl(25, 97%, 53%)')
}