const counter = document.querySelectorAll(".counter");

counter.forEach((counter) => {
    // console.log(counter);

    counter.innerHTML = 0;

    const updateCounter = () => {
        const targetCount = counter.getAttribute("data-target");
        console.log(typeof targetCount);


        
    }

    updateCounter();
    
})