"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import imgElemen1 from "@/public/elemen1.svg";

export default function Home() {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    const loadfirst = useRef(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [menu, setMenu] = useState(false);
    const bukaMenu = () => {
        setOpenMenu(true);
        setTimeout(() => {
            setMenu(true);
        }, 10);
    };
    const tutupMenu = () => {
        setMenu(false);
        setTimeout(() => {
            setOpenMenu(false);
        }, 100);
    };

    const containeFotoScrollElm = useRef<HTMLDivElement>(null);
    const indexCurrFoto = useRef(0);
    const geserContainerFoto = (arah: string) => {
        const direction = arah === "kiri" ? -1 : 1;
        if (containeFotoScrollElm.current) {
            if (
                (indexCurrFoto.current == 0 && direction == -1) ||
                (indexCurrFoto.current ==
                    containeFotoScrollElm.current.children.length - 1 &&
                    direction == 1)
            )
                return;
            console.log(
                containeFotoScrollElm.current.children[indexCurrFoto.current]
                    .clientWidth
            );
            const scrollAmount =
                containeFotoScrollElm.current.children[indexCurrFoto.current]
                    .clientWidth * direction;
            containeFotoScrollElm.current.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });
            indexCurrFoto.current += direction;
        }
    };

    const containeKataScrollElm = useRef<HTMLDivElement>(null);
    const geserContainerKata = (arah: string) => {
        const direction = arah === "kiri" ? -1 : 1;
        if (containeKataScrollElm.current) {
            const scrollAmount =
                containeKataScrollElm.current.clientWidth * direction;
            containeKataScrollElm.current.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        /* eslint-disable  @typescript-eslint/no-explicit-any */
        const expireTime = "2024-12-25 15:00:00";

        // Fungsi untuk menghitung selisih waktu dan mengonversi ke format hari, jam, menit, detik
        function calculateTimeDifference(expireTime: string) {
            const now = new Date() as any;
            const targetTime = new Date(expireTime) as any;
            const difference = targetTime - now;

            if (difference <= 0) {
                clearInterval(intervalId);
                console.log("Expired");
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (difference % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            // console.log(
            //     `${days} hari, ${hours} jam, ${minutes} menit, ${seconds} detik`
            // );
            setDays(days);
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
        }

        const intervalId = setInterval(
            () => calculateTimeDifference(expireTime),
            1000
        );
    }, []);

    const [open, setOpen] = useState(false);
    const [music, setMusic] = useState(true);
    useEffect(() => {
        if (loadfirst.current) {
            if (open) {
                if (audioRef.current) {
                    if (music) {
                        audioRef.current.play();
                    } else {
                        audioRef.current.pause();
                    }
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [music]);

    useEffect(() => {
        if (!loadfirst.current) {
            loadfirst.current = true;
            return;
        }
        if (audioRef.current) audioRef.current.play();
    }, [open]);

    return (
        <>
            {open && (
                <div className="container-float-btn">
                    <button onClick={bukaMenu} className="btn-circle">
                        <i className="material-icons">menu</i>
                    </button>
                    <button
                        onClick={() => {
                            setMusic((prev) => !prev);
                        }}
                        className="btn-circle"
                    >
                        <i className="material-icons">
                            {music ? "volume_up" : "volume_off"}
                        </i>
                    </button>
                </div>
            )}
            <audio ref={audioRef} src="lagu.mp3" />
            {openMenu && (
                <div
                    onClick={tutupMenu}
                    className={"menu-back" + (menu ? " show" : "")}
                >
                    <div className="menu-container">
                        <div className="flex flex-col items-end w-full">
                            <h3 className="mb-5">#TImetoshaRE</h3>
                            <a href="#meetbridge" className="menu-item">
                                Bride & Groom
                            </a>
                            <a href="#livestream" className="menu-item">
                                Live Streaming
                            </a>
                            <a href="#gift" className="menu-item">
                                Wedding Gift
                            </a>
                        </div>
                        <div className="flex flex-col items-end w-full">
                            <p className="text-end">
                                Created with Love by Invitato
                                <br />
                                2024 Tiffany & Jared. All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            )}
            <div className="flex">
                <div className="kiri">
                    <div className="isi">
                        <div>
                            <h5>WEDDING ANNOUNCEMENT</h5>
                            <h1 className="my-4">
                                TIFFANY &<br />
                                JARED
                            </h1>
                            <p className="mb-2" style={{ maxWidth: "700px" }}>
                                "Aku ingin mencintaimu dengan sederhana; dengan
                                kata yang tak sempat diucapkan kayu kepada api
                                yang menjadikannya abu. Aku ingin mencintaimu
                                dengan sederhana; dengan isyarat yang tak sempat
                                disampaikan awan kepada hujan yang menjadikannya
                                tiada."
                            </p>
                            <p
                                style={{
                                    backgroundColor: "rgba(255,255,255,0.5)",
                                    width: "fit-content",
                                    color: "black",
                                    padding: "0.1em 3em 0 0.4em",
                                }}
                            >
                                — Sapardi Djoko Damono
                            </p>
                        </div>
                    </div>
                    <div className="gambar">
                        <Image
                            src={
                                "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Desktop.jpg?updatedAt=1698223781539"
                            }
                            alt="Gambar1"
                            width={1600}
                            height={11068}
                        />
                    </div>
                </div>
                <div className="kanan">
                    <div
                        style={{ height: "100svh" }}
                        className={"page w-full" + (open ? " hide" : "")}
                    >
                        <div
                            className="w-full"
                            style={{
                                position: "absolute",
                                color: "white",
                                zIndex: 2,
                                height: "100svh",
                                backgroundColor: "rgba(0, 0, 0, 0.3)",
                                padding: "2em",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                            }}
                        >
                            <h5 className="text-center mb-6">
                                WEDDING ANNOUNCEMENT
                            </h5>
                            <h2 className="text-center">TIFFANY & JARED</h2>
                            <h3 className="text-center mb-10">#TImetoshaRE</h3>
                            <button
                                onClick={() => {
                                    setOpen(true);
                                }}
                                className="btn outline-putih"
                            >
                                Open
                            </button>
                        </div>
                        <div style={{ height: "100svh" }}>
                            <Image
                                className="h-full w-full"
                                style={{
                                    objectFit: "cover",
                                    filter: "contrast(0.8)",
                                    zIndex: 1,
                                }}
                                src={
                                    "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/1.%20Cover.jpg?updatedAt=1698222296920"
                                }
                                alt="Gambar1"
                                width={1600}
                                height={11068}
                            />
                        </div>
                    </div>

                    {/* =============== page 2 =================== */}
                    {open && (
                        <div className={"page w-full"}>
                            <div
                                className="w-full"
                                style={{
                                    position: "absolute",
                                    color: "white",
                                    zIndex: 2,
                                    height: "100svh",
                                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                                    padding: "4em",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    flexDirection: "column",
                                }}
                            >
                                <h5 className="text-center mb-6">
                                    WEDDING ANNOUNCEMENT
                                </h5>
                                <div>
                                    <h2 className="text-center">
                                        TIFFANY & JARED
                                    </h2>
                                    <h3 className="text-center mb-10">
                                        #TImetoshaRE
                                    </h3>
                                </div>
                                <div className="flex justify-end w-full">
                                    <a
                                        href="#section1"
                                        className="btn outline-putih"
                                    >
                                        <p>Scroll</p>
                                        <i className="material-icons">
                                            expand_more
                                        </i>
                                    </a>
                                </div>
                            </div>
                            <div style={{ height: "100svh" }}>
                                <Image
                                    className="h-full w-full"
                                    style={{
                                        objectFit: "cover",
                                        filter: "contrast(0.8)",
                                        zIndex: 1,
                                    }}
                                    src={
                                        "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Slideshow/Slideshow-Cover-1.jpg?updatedAt=1698222442642"
                                    }
                                    alt="Gambar1"
                                    width={1600}
                                    height={11068}
                                />
                            </div>
                            <div id="section1" style={{ padding: "4em" }}>
                                <h5 className="text-center">
                                    DEAR MR-MRS-MS,
                                    <br />
                                    Family & Friends
                                </h5>
                                <h3 className="text-center my-8">
                                    Welcome to
                                    <br />
                                    Tiffany & Jared’s
                                    <br />
                                    Wedding Website
                                </h3>
                                <p className="text-center">
                                    Together with joyful hearts and the grace of
                                    God, we joyfully announce the upcoming of
                                    our marriage.
                                </p>
                            </div>
                            <div
                                className="container-slider-image mb-3"
                                style={{ paddingInline: "4em" }}
                                ref={containeFotoScrollElm}
                            >
                                <Image
                                    className="h-full w-full"
                                    style={{
                                        objectFit: "cover",
                                        filter: "contrast(0.8)",
                                        zIndex: 1,
                                    }}
                                    src={
                                        "https://invitato.net/test-product-engineer/static/4-3943e72cf6bb4fe685c5917ea1d1cac4.jpg"
                                    }
                                    alt="Gambar1"
                                    width={1600}
                                    height={11068}
                                />
                                <Image
                                    className="h-full w-full"
                                    style={{
                                        objectFit: "cover",
                                        filter: "contrast(0.8)",
                                        zIndex: 1,
                                    }}
                                    src={
                                        "https://invitato.net/test-product-engineer/static/5-ffa38a07e15195800fbcc590cb50b2d0.jpg"
                                    }
                                    alt="Gambar1"
                                    width={1600}
                                    height={11068}
                                />
                                <Image
                                    className="h-full w-full"
                                    style={{
                                        objectFit: "cover",
                                        filter: "contrast(0.8)",
                                        zIndex: 1,
                                    }}
                                    src={
                                        "https://invitato.net/test-product-engineer/static/1-2b43ea516254cdff99c88a7fce90ae98.jpg"
                                    }
                                    alt="Gambar1"
                                    width={1600}
                                    height={11068}
                                />
                                <Image
                                    className="h-full w-full"
                                    style={{
                                        objectFit: "cover",
                                        filter: "contrast(0.8)",
                                        zIndex: 1,
                                    }}
                                    src={
                                        "https://invitato.net/test-product-engineer/static/2-9fafa4bf7091b5207804ffe51f518939.jpg"
                                    }
                                    alt="Gambar1"
                                    width={1600}
                                    height={11068}
                                />
                                <Image
                                    className="h-full w-full"
                                    style={{
                                        objectFit: "cover",
                                        filter: "contrast(0.8)",
                                        zIndex: 1,
                                    }}
                                    src={
                                        "https://invitato.net/test-product-engineer/static/3-8ac38da1cdc0fa503b46859811696a13.jpg"
                                    }
                                    alt="Gambar1"
                                    width={1600}
                                    height={11068}
                                />
                            </div>
                            <div
                                className="flex justify-end"
                                style={{
                                    paddingInline: "4em",
                                }}
                            >
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => {
                                            geserContainerFoto("kiri");
                                        }}
                                        className="btn outline-hitam"
                                    >
                                        <i className="material-icons">
                                            arrow_back
                                        </i>
                                    </button>
                                    <button
                                        onClick={() => {
                                            geserContainerFoto("kanan");
                                        }}
                                        className="btn outline-hitam"
                                    >
                                        <i className="material-icons">
                                            arrow_forward
                                        </i>
                                    </button>
                                </div>
                            </div>
                            <div
                                id="meetbridge"
                                style={{
                                    padding: "4em 4em 0 4em",
                                }}
                            >
                                <h5 className="text-center">
                                    MEET THE BRIDE & GROOM
                                </h5>
                            </div>
                            <div
                                style={{
                                    padding: "2em 4em 4em 4em",
                                    overflow: "hidden",
                                }}
                                className="flex justify-center"
                            >
                                <div
                                    className="w-full h-full"
                                    style={{
                                        position: "relative",
                                        width: "90%",
                                    }}
                                >
                                    <Image
                                        className="elemen1"
                                        src={imgElemen1}
                                        alt="Gambar1"
                                    />
                                    <Image
                                        style={{
                                            objectFit: "cover",
                                            filter: "contrast(0.8)",
                                            zIndex: 1,
                                            width: "100%",
                                            aspectRatio: "1 / 1",
                                        }}
                                        src={
                                            "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/4.%20Bride%20_%20Groom?updatedAt=1698223108396"
                                        }
                                        alt="Gambar1"
                                        width={1600}
                                        height={11068}
                                    />
                                </div>
                            </div>
                            <div style={{ padding: "0 4em 4em 4em" }}>
                                <h3 className="text-center mb-2">
                                    Tiffany Smith
                                </h3>
                                <h4 className="text-center mb-2">
                                    @tiffanyinvitato
                                </h4>
                                <p className="text-center mb-8">
                                    The Daughter of
                                    <br />
                                    Mr. Smith & Mrs. Bellyna
                                </p>
                                <h3 className="text-center mb-2">
                                    Robin Jared Lucas
                                </h3>
                                <h4 className="text-center mb-2">
                                    @jaredinvitato
                                </h4>
                                <p className="text-center">
                                    The Son of
                                    <br />
                                    Mr. Lucas & Mrs. Anita
                                </p>
                            </div>
                            <div
                                className="flex flex-col items-center"
                                style={{
                                    backgroundColor: "#F9F7F4",
                                    padding: "2em 4em 4em 4em",
                                }}
                            >
                                <span
                                    style={{
                                        display: "block",
                                        fontFamily: "var(--font-coustard)",
                                        fontSize: "5em",
                                        width: "fit-content",
                                        color: "#cdc1b1",
                                        height: "1em",
                                        transform: "rotate(180deg)",
                                    }}
                                >
                                    "
                                </span>
                                <p className="text-center mb-5">
                                    “And of His signs is that He created for you
                                    from yourselves mates that you may find
                                    tranquility in them, and He placed between
                                    you affection and mercy. Indeed in that are
                                    signs for a people who give thought.”
                                </p>
                                <h5 className="text-center">
                                    - Q.S. Ar-Rum: 21
                                </h5>
                            </div>
                            <div style={{ padding: "4em" }}>
                                <h5>PLACE & TIME</h5>
                                <h3 className="mb-3">Holy Matrimony</h3>
                                <p style={{ fontStyle: "normal" }}>
                                    Date: Monday, 26 February 2024
                                </p>
                                <p style={{ fontStyle: "normal" }}>
                                    Time: 10.00 WIB
                                </p>
                            </div>
                            <div
                                id="gift"
                                className="w-full flex justify-center items-center flex-col"
                                style={{
                                    position: "absolute",
                                    objectFit: "cover",
                                    zIndex: 1,
                                    aspectRatio: "16 / 9",
                                }}
                            >
                                <h3 style={{ color: "white" }} className="mb-3">
                                    Wedding Gift
                                </h3>
                                <button className="btn outline-putih">
                                    Send Gift
                                </button>
                            </div>
                            <div>
                                <Image
                                    className="w-full"
                                    style={{
                                        objectFit: "cover",
                                        zIndex: 1,
                                        aspectRatio: "16 / 9",
                                    }}
                                    src={
                                        "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/6.%20Wedding%20Gift?updatedAt=1698223189363"
                                    }
                                    alt="Gambar1"
                                    width={1600}
                                    height={11068}
                                />
                            </div>
                            <div
                                id="livestream"
                                className="w-full flex justify-center items-center flex-col"
                                style={{
                                    position: "absolute",
                                    objectFit: "cover",
                                    zIndex: 1,
                                    aspectRatio: "16 / 9",
                                }}
                            >
                                <h3 style={{ color: "white" }} className="mb-3">
                                    Live Streaming
                                </h3>
                                <button className="btn outline-putih">
                                    Open via Youtube
                                </button>
                            </div>
                            <div>
                                <Image
                                    className="w-full"
                                    style={{
                                        objectFit: "cover",
                                        zIndex: 1,
                                        aspectRatio: "16 / 9",
                                    }}
                                    src={
                                        "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/8.%20Live%20Streaming?updatedAt=1698223271895"
                                    }
                                    alt="Gambar1"
                                    width={1600}
                                    height={11068}
                                />
                            </div>
                            <div style={{ padding: "4em 4em 0 4em" }}>
                                <h3 className="text-center">
                                    Tiffany & Jared are Getting Married!
                                </h3>
                            </div>
                            <div
                                style={{
                                    padding: "2em 4em 4em 4em",
                                    overflow: "hidden",
                                }}
                                className="flex justify-center"
                            >
                                <div
                                    className="w-full h-full"
                                    style={{
                                        position: "relative",
                                        width: "90%",
                                    }}
                                >
                                    <Image
                                        className="elemen1"
                                        src={imgElemen1}
                                        alt="Gambar1"
                                    />
                                    <Image
                                        style={{
                                            objectFit: "cover",
                                            filter: "contrast(0.8)",
                                            zIndex: 1,
                                            width: "100%",
                                            aspectRatio: "3 / 4",
                                        }}
                                        src={
                                            "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/9.%20Love%20Story?updatedAt=1698223306540"
                                        }
                                        alt="Gambar1"
                                        width={1600}
                                        height={11068}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-center mb-6">
                                <a
                                    className="btn outline-hitam"
                                    style={{ width: "fit-content" }}
                                >
                                    Watch our video
                                </a>
                            </div>
                            <div
                                style={{
                                    overflowX: "scroll",
                                    scrollSnapType: "x mandatory",
                                }}
                                className="w-full hide-srollbar mb-3"
                                ref={containeKataScrollElm}
                            >
                                <div style={{ display: "flex", width: "300%" }}>
                                    <div
                                        style={{
                                            flex: 1,
                                            scrollSnapAlign: "center",
                                            paddingInline: "4em",
                                        }}
                                    >
                                        <h4 className="mb-3 text-center">
                                            9 APRIL 2018
                                        </h4>
                                        <p className="text-center">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Nullam
                                            sollicitudin malesuada sapien, sit
                                            amet sodales ex sagittis quis.
                                            Suspendisse facilisis mi volutpat
                                            urna pulvinar, quis aliquet dui
                                            lobortis. Sed egestas consequat
                                            risus, eu mollis est tincidunt
                                            accumsan.
                                        </p>
                                    </div>
                                    <div
                                        style={{
                                            flex: 1,
                                            scrollSnapAlign: "center",
                                            paddingInline: "4em",
                                        }}
                                    >
                                        <h4 className="mb-3 text-center">
                                            3 FEBRUARI 2018
                                        </h4>
                                        <p className="text-center">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Nullam
                                            sollicitudin malesuada sapien, sit
                                            amet sodales ex sagittis quis.
                                            Suspendisse facilisis mi volutpat
                                            urna pulvinar, quis aliquet dui
                                            lobortis. Sed egestas consequat
                                            risus, eu mollis est tincidunt
                                            accumsan.
                                        </p>
                                    </div>
                                    <div
                                        style={{
                                            flex: 1,
                                            scrollSnapAlign: "center",
                                            paddingInline: "4em",
                                        }}
                                    >
                                        <h4 className="mb-3 text-center">
                                            12 JANUARI 2018
                                        </h4>
                                        <p className="text-center">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Nullam
                                            sollicitudin malesuada sapien, sit
                                            amet sodales ex sagittis quis.
                                            Suspendisse facilisis mi volutpat
                                            urna pulvinar, quis aliquet dui
                                            lobortis. Sed egestas consequat
                                            risus, eu mollis est tincidunt
                                            accumsan.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex justify-center"
                                style={{
                                    paddingInline: "4em",
                                    paddingBottom: "4em",
                                }}
                            >
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => {
                                            geserContainerKata("kiri");
                                        }}
                                        className="btn outline-hitam"
                                    >
                                        <i className="material-icons">
                                            arrow_back
                                        </i>
                                    </button>
                                    <button
                                        onClick={() => {
                                            geserContainerKata("kanan");
                                        }}
                                        className="btn outline-hitam"
                                    >
                                        <i className="material-icons">
                                            arrow_forward
                                        </i>
                                    </button>
                                </div>
                            </div>
                            <div
                                style={{
                                    backgroundColor: "#F9F7F4",
                                    padding: "4em",
                                }}
                            >
                                <h3 className="text-center mb-3">
                                    Prayers & Wishes
                                </h3>
                                <p className="text-center mb-4">
                                    Please leave your sincere prayers and
                                    <br />
                                    wishes to us and our family:
                                </p>
                                <form>
                                    <input
                                        className="mb-2"
                                        type="text"
                                        placeholder="Name"
                                    />
                                    <input
                                        className="mb-2"
                                        type="text"
                                        placeholder="The Relationship"
                                    />
                                    <textarea
                                        className="mb-4"
                                        placeholder="Prayers & Wishes"
                                    ></textarea>
                                    <div className="flex justify-center">
                                        <button
                                            type="submit"
                                            className="btn outline-hitam"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div style={{ padding: "4em 4em 2em 4em" }}>
                                <p className="text-center">
                                    It will be a joy for us if you are still
                                    willing to give your blessing from afar.
                                    Thank you for all the words, prayers, and
                                    attention given.
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <div className="flex gap-2 w-80">
                                    <div className="item-waktu">
                                        <h3
                                            className="mb-1"
                                            style={{ fontSize: "large" }}
                                        >
                                            {("0" + days).slice(-2)}
                                        </h3>
                                        <p style={{ fontSize: "small" }}>
                                            Days
                                        </p>
                                    </div>
                                    <div className="item-waktu">
                                        <h3
                                            className="mb-1"
                                            style={{ fontSize: "large" }}
                                        >
                                            {("0" + hours).slice(-2)}
                                        </h3>
                                        <p style={{ fontSize: "small" }}>
                                            Hours
                                        </p>
                                    </div>
                                    <div className="item-waktu">
                                        <h3
                                            className="mb-1"
                                            style={{ fontSize: "large" }}
                                        >
                                            {("0" + minutes).slice(-2)}
                                        </h3>
                                        <p style={{ fontSize: "small" }}>
                                            Minutes
                                        </p>
                                    </div>
                                    <div className="item-waktu">
                                        <h3
                                            className="mb-1"
                                            style={{ fontSize: "large" }}
                                        >
                                            {("0" + seconds).slice(-2)}
                                        </h3>
                                        <p style={{ fontSize: "small" }}>
                                            Seconds
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div style={{ padding: "4em" }}>
                                <h5 className="text-center mb-3">
                                    OUR SINCERE,
                                </h5>
                                <h2 className="text-center mb-1">
                                    Tiffany & Jared
                                </h2>
                                <h3
                                    className="text-center"
                                    style={{ fontStyle: "italic" }}
                                >
                                    #TImetoshaRE
                                </h3>
                            </div>
                            <div className="flex">
                                <div style={{ flex: 1 }}>
                                    <Image
                                        style={{
                                            objectFit: "cover",
                                            filter: "contrast(0.8)",
                                            zIndex: 1,
                                            aspectRatio: "1 / 1",
                                        }}
                                        className="w-full"
                                        src={
                                            "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Footer/1.Footer.jpg?updatedAt=1698223681292"
                                        }
                                        alt="Gambar1"
                                        width={1600}
                                        height={11068}
                                    />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <Image
                                        style={{
                                            objectFit: "cover",
                                            filter: "contrast(0.8)",
                                            zIndex: 1,
                                            aspectRatio: "1 / 1",
                                        }}
                                        className="w-full"
                                        src={
                                            "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Footer/2.Footer.jpg?updatedAt=1698223682643"
                                        }
                                        alt="Gambar1"
                                        width={1600}
                                        height={11068}
                                    />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <Image
                                        style={{
                                            objectFit: "cover",
                                            filter: "contrast(0.8)",
                                            zIndex: 1,
                                            aspectRatio: "1 / 1",
                                        }}
                                        className="w-full"
                                        src={
                                            "https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Footer/3.Footer.jpg?updatedAt=1698223681505"
                                        }
                                        alt="Gambar1"
                                        width={1600}
                                        height={11068}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    padding: "2em",
                                    backgroundColor: "#F9F7F4",
                                }}
                                className="flex flex-col items-center justify-center"
                            >
                                <Image
                                    style={{
                                        objectFit: "cover",
                                        filter: "invert(1)",
                                        zIndex: 1,
                                    }}
                                    src={
                                        "https://ik.imagekit.io/invitatoid/global-assets/invitato_hs3nyqsuwy_.png?updatedAt=1638541184695"
                                    }
                                    alt="Gambar1"
                                    width={100}
                                    height={90}
                                    className="mb-2"
                                />
                                <p style={{ fontStyle: "normal" }}>
                                    Created with Love by Invitato
                                </p>
                                <p style={{ fontStyle: "normal" }}>
                                    Song by So Far, So Good - Don Williams
                                </p>
                                <p style={{ fontStyle: "normal" }}>
                                    © 2024 Tiffany & Jared. All Rights Reserved
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
