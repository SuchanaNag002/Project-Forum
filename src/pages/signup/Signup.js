import { useSignup } from "../../hooks/useSignup";
import { useState } from "react";
//styles
import "./Signup.css";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);
  const {signup, isPending, error} = useSignup();

  const handleSubmit=(e)=>{
    e.preventDefault()
    signup(email, password, displayName, thumbnail)
  }
  const handleFileChange=(e)=>{
    setThumbnail(null)
    let selected = e.target.files[0] //an array of files, 1st file selected
    console.log(selected)
    if(!selected){
      setThumbnailError("Please select a file")
      return 
    }
    if(!selected.type.includes('image')){
      setThumbnailError("Selected file must be an image")
      return 
    }
    if(selected.size>10000000){
      setThumbnailError("Image file size must be less than 100 kbytes")
      return 
    }
    setThumbnailError(null)
    setThumbnail(selected)
    console.log("Thumbnail updated")
  }
  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <label>
        <span>Email:</span>
        <input
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>Display Name:</span>
        <input
          required
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <label>
        <span>Display Image:</span>
        <input
          required
          type="file"
          onChange={handleFileChange}
        />
        {thumbnailError && <div className="error">{thumbnailError}</div>}
      </label>
      {!isPending && <button className="btn">Sign Up</button>}
      {isPending && <button className="btn" disabled>Loading</button>}
      {error && <div className="error">{error}</div>}
    </form>
  );
}
