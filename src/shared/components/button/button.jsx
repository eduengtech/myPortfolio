import { IoMdCloudDownload } from "react-icons/io";

export function Botton() {
    return (
        <>
            <div className="btn__CV">
                
                <button onClick={() => open('https://drive.google.com/drive/folders/12PEwsEw7rUWhNlPPdnQKcloSaitiUAjP', '_blank')}>
                    <IoMdCloudDownload /> 
                    <span> Download CV</span>
                </button>

                <a href="#">

                </a>

            </div>
        </>
    )
}