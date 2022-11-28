import { useEffect, useState } from "react"

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false);
    const [isSellerLoading, setIsSellerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            // fetch(`https://re-books-server.vercel.app/users/${email}`)
            fetch(`https://re-books-server.vercel.app/users/?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.role === "Seller") {
                        setIsSeller(true);
                    }
                    setIsSellerLoading(false);
                })
        }
    }, [email])
    return [isSeller, isSellerLoading]

}

export default useSeller;