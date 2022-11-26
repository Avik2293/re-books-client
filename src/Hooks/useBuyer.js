import { useEffect, useState } from "react"

const useBuyer = email => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [isBuyerLoading, setIsBuyerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            // fetch(`http://localhost:5000/users/${email}`)
            fetch(`http://localhost:5000/users/?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data.role);
                    // setIsAdmin(data.isAdmin);
                    if(data.role === "Buyer"){
                        setIsBuyer(true);
                    }
                    setIsBuyerLoading(false);
                })
        }
    }, [email])
    return [isBuyer, isBuyerLoading]
    // return [isAdmin]
}

export default useBuyer;