import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

export default function GifExpertApp() {
    const [categories, setCategories] = useState(["One Punch"])

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <AddCategory setCategories={setCategories} />

            <ol>
                {
                    categories.map(category => {
                        return (
                            <GifGrid
                                key={category}
                                category={category}
                            />
                        )
                    })
                }
            </ol>
        </>
    )
}