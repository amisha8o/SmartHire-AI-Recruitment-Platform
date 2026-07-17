import { useState, useEffect, useCallback } from "react";
import Cropper from "react-easy-crop";
import imageCompression from "browser-image-compression";

async function getCroppedImg(imageSrc, pixelCrop) {

  const image = new Image();

  image.src = imageSrc;

  await new Promise((resolve) => {
    image.onload = resolve;
  });

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  );

  return canvas.toDataURL("image/jpeg");
}

function CandidateProfile({
  username,
  level,
  score
}) {
  const [photo, setPhoto] = useState(

  localStorage.getItem("profilePhoto") || ""
);

useEffect(() => {
  localStorage.setItem("profilePhoto", photo);
}, [photo]);

const [image, setImage] = useState(null);
const [crop, setCrop] = useState({ x: 0, y: 0 });
const [zoom, setZoom] = useState(1);
const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
const [showCropper, setShowCropper] = useState(false);

const onCropComplete = useCallback((_, croppedAreaPixels) => {
  setCroppedAreaPixels(croppedAreaPixels);
}, []);

async function uploadPhoto(e) {

  const file = e.target.files[0];

  if (!file) return;

  if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
    alert("Only JPG, PNG and WEBP images are allowed.");
    return;
  }

  if (file.size > 2 * 1024 * 1024) {
    alert("Image size should be less than 2 MB.");
    return;
  }

  const compressed = await imageCompression(file, {
    maxSizeMB: 1,
    maxWidthOrHeight: 800
  });

  const reader = new FileReader();

  reader.onload = () => {
    setImage(reader.result);
    setShowCropper(true);
  };

  reader.readAsDataURL(compressed);
}

async function saveCrop() {

  const cropped = await getCroppedImg(
    image,
    croppedAreaPixels
  );

  setPhoto(cropped);

  localStorage.setItem("profilePhoto", cropped);

  setShowCropper(false);
}
  return (

<>
    {showCropper && (

<div
style={{
position:"fixed",
top:0,
left:0,
right:0,
bottom:0,
background:"rgba(0,0,0,.8)",
zIndex:9999,
display:"flex",
justifyContent:"center",
alignItems:"center"
}}
>

<div
style={{
width:"500px",
height:"500px",
background:"#122248",
padding:"20px",
borderRadius:"20px",
position:"relative"
}}
>

<Cropper
image={image}
crop={crop}
zoom={zoom}
aspect={1}
cropShape="round"
showGrid={false}
onCropChange={setCrop}
onZoomChange={setZoom}
onCropComplete={onCropComplete}
/>

<div
style={{
position:"absolute",
bottom:"20px",
left:"20px",
right:"20px"
}}
>

<input
type="range"
min={1}
max={3}
step={0.1}
value={zoom}
onChange={(e)=>setZoom(e.target.value)}
style={{width:"100%"}}
/>

<br/><br/>

<button
onClick={saveCrop}
style={{
padding:"10px 20px",
background:"#22c55e",
color:"white",
border:"none",
borderRadius:"10px",
marginRight:"10px"
}}
>
Save Crop
</button>

<button
onClick={()=>setShowCropper(false)}
style={{
padding:"10px 20px",
background:"#ef4444",
color:"white",
border:"none",
borderRadius:"10px"
}}
>
Cancel
</button>

</div>

</div>

</div>

)}

    <div style={styles.card}>

      <div style={styles.header}>

        <div style={styles.avatar}>

  {photo ? (

    <img
      src={photo}
      alt="Profile"
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        objectFit: "cover"
      }}
    />

  ) : (

    username.charAt(0).toUpperCase()

  )}

</div>

        <div>

          <h2 style={styles.name}>
            {username}
          </h2>

          <p style={styles.role}>
            Software Engineer
          </p>

          <p style={styles.location}>
            📍 India
          </p>
          <input
  type="file"
  accept="image/*"
  onChange={uploadPhoto}
  style={{
    marginTop: "10px",
    color: "white"
  }}
/>

        </div>

      </div>

      <div style={styles.grid}>

        <Info
          title="Status"
          value="🟢 Available"
        />

        <Info
          title="Experience"
          value="Fresher"
        />

        <Info
          title="Level"
          value={level}
        />

        <Info
          title="ATS Score"
          value={`${score}%`}
        />

        <Info
          title="Profile"
          value="95%"
        />

        <Info
          title="Skills"
          value="12+"
        />

      </div>

      <div style={styles.progressBox}>

        <div style={styles.progressTop}>

          <span>
            Profile Completion
          </span>

          <span>
            95%
          </span>

        </div>

        <div style={styles.progress}>

          <div
            style={{
              ...styles.fill,
              width: "95%"
            }}
          />

        </div>

      </div>

        </div>

</>

)

}

function Info({
  title,
  value
}) {

  return (

    <div style={styles.infoCard}>

      <p style={styles.label}>
        {title}
      </p>

      <h3 style={styles.value}>
        {value}
      </h3>
    </div>

)

}
const styles = {

  card: {
    marginTop: "25px",
    background: "linear-gradient(145deg,#122248,#1a2f63)",
    borderRadius: "22px",
    padding: "30px",
    boxShadow: "0 12px 30px rgba(0,0,0,.35)"
  },

  header: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "30px"
  },

  avatar: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    background: "linear-gradient(135deg,#5b4bff,#3b82f6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "36px",
    fontWeight: "bold",
    boxShadow: "0 10px 25px rgba(91,75,255,.4)"
  },

  name: {
    margin: 0,
    color: "white"
  },

  role: {
    color: "#94a3b8",
    marginTop: "6px"
  },

  location: {
    color: "#9ca3af",
    marginTop: "5px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "18px"
  },

  infoCard: {
    background: "#13244d",
    padding: "18px",
    borderRadius: "16px",
    textAlign: "center"
  },

  label: {
    margin: 0,
    color: "#94a3b8",
    fontSize: "13px"
  },

  value: {
    marginTop: "10px",
    color: "white"
  },

  progressBox: {
    marginTop: "30px"
  },

  progressTop: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    color: "white"
  },

  progress: {
    height: "12px",
    background: "#0b1738",
    borderRadius: "20px",
    overflow: "hidden"
  },

  fill: {
    height: "100%",
    borderRadius: "20px",
    background: "linear-gradient(90deg,#22c55e,#3b82f6)"
  }

}

export default CandidateProfile