import { useState } from "react";

const NewUser = () => {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [p5Points, setP5Points] = useState(100)
    const [rewardPoints, setRewardPoints] = useState(0)

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/users/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id,
                    name,
                    p5Points,
                    rewardPoints

                })
            });
            if (response.ok) {
                console.log('User created successfully!');
                // You can perform further actions upon successful creation of the user
            } else {
                console.error('Failed to create user');
            }
        } catch (error) {
            console.error('Error creating user:', error);
        }
    }
  return (
    <div className="form-container">
    <form action="#" method="post">
        <div className="form-group">
            <label htmlFor="id">ID:</label>
            <input type="text" value={id} id="id" name="id" onChange={(e) => setId(e.target.value)} />
        </div>
        <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} name="name" required onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
            <label htmlFor="p5_points">P5 Points:</label>
            <input type="number" id="p5_points" value={p5Points} name="p5_points" onChange={(e) => setP5Points(e.target.value)} />
        </div>
        <div className="form-group">
            <label htmlFor="reward_points">Reward Points:</label>
            <input type="number" id="reward_points" value={rewardPoints} name="reward_points" onChange={(e) => setRewardPoints(e.target.value)} />
        </div>
        <div className="form-group">
            <input type="submit" value="Submit" onClick={handleSubmit}/>
        </div>
    </form>
</div>
  )
}

export default NewUser
