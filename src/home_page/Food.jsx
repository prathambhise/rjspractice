function Food(){
    const food1 = "apple"
    const food2 = "banana"
    return(
        <>
            <h2>Food Recipe</h2>
            <h3>Ingredients</h3>
            <ol start="3" type="1">
                <li>{food1}</li>
                <li>mango</li>
                <li>{food2.toUpperCase()}</li>
            </ol>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque rem repellendus labore commodi maxime et aspernatur quas voluptatem ullam. Consequuntur voluptates molestiae earum. Nemo hic voluptas molestiae dignissimos totam eos.</p>
        </>
    )
}

export default Food
