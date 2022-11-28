import { useEffect, useState } from "react"

const useBuyer = email => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [isBuyerLoading, setIsBuyerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            // fetch(`https://re-books-server.vercel.app/users/${email}`)
            fetch(`https://re-books-server.vercel.app/users/?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data.role);
                    if (data.role === "Buyer") {
                        setIsBuyer(true);
                    }
                    setIsBuyerLoading(false);
                })
        }
    }, [email])
    return [isBuyer, isBuyerLoading]

}

export default useBuyer;