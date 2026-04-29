"user strict";


    const list = document.getElementById('cajun-dishes');
    const items = list.getElementsByTagName('li');
    
    
    console.log(`Deirdre has explored ${items.length} delicious foods!`);

    
    Array.from(items).forEach(item => {
        item.addEventListener('click', () => {
            alert(`Ready to head back to ${item.textContent}?`);
        });
    });

