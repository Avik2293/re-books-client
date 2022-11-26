import { useEffect, useState } from "react"

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false);
    // const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            // fetch(`http://localhost:5000/users/${email}`)
            fetch(`http://localhost:5000/users/?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // setIsAdmin(data.isAdmin);
                    if(data.role === "Admin"){
                        setIsSeller(true);
                    }
                    // setIsAdminLoading(false);
                })
        }
    }, [email])
    // return [isAdmin, isAdminLoading]
    return [isSeller]
}

export default useSeller;