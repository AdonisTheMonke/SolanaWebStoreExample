import Image from "next/image"

const ConnectHeader = () => {
    return <div className="" style={{height: "30vh"}}>
        <div>
            <Image
                src={"/images/logo.png"}
                height={180}
                width={180}
                alt={"Volitaire Logo"}
            ></Image>
        </div>
    </div>
}

export default ConnectHeader