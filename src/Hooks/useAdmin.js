import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
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
                        setIsAdmin(true);
                    }
                    // setIsAdminLoading(false);
                })
        }
    }, [email])
    // return [isAdmin, isAdminLoading]
    return [isAdmin]
}

export default useAdmin;