
import React, { useRef, useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import PasswordGate from "./PasswordGate";
import pic1 from "./images/pic1.jpg";
import pic2 from "./images/pic2.jpg";
import pic3 from "./images/pic3.jpg";
import pic4 from "./images/pic4.jpg";
import pic5 from "./images/pic5.jpg";
import pic6 from "./images/pic6.jpg";
import pic7 from "./images/pic7.jpg";
import pic8 from "./images/pic8.jpg";
import pic9 from "./images/pic9.jpg";
import pic10 from "./images/pic10.jpg";
import pic11 from "./images/pic11.jpg";
import pic12 from "./images/pic12.jpg";
import pic13 from "./images/pic13.jpg";
import pic14 from "./images/pic14.jpg";
import pic15 from "./images/pic15.jpg";
import pic16 from "./images/pic16.jpg";
import pic17 from "./images/pic17.jpg";
import pic18 from "./images/pic18.jpg";
import pic19 from "./images/pic19.jpg";
const audioFile = "https://www.dropbox.com/scl/fi/wnp3s3306fsrxhjrazakv/audio.mp3?rlkey=qgvlxt9hikkt9dgmcp8ykvmiq&st=5fjk4c82&raw=1";
const videoFile = "https://www.dropbox.com/scl/fi/atojv8bjy76uk2fzex4ub/Birthday1.mp4?rlkey=kq436z02oq1cdmnyd6u1eoe20&st=iisrm9k1&raw=1";

const pics = [
  pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19
];


function App() {
  const nextSectionRef = useRef(null);
  const [unlocked, setUnlocked] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef(null);


  // Corresponding messages for each pic
  const messages = [
    "Never thought this little girl would be a big impact in .my life.I remember getting this pic from someone and after it, used to laugh how this little girl fell for me once ",
              "This pic just gets me wonder how did this girl made me fall for her. This is somethimg i stole from your stories and dont get mad at me for this ",
              "Another pic of your childhood. Found this cute one in one of your friends story. dont mistake me but yet cant stop myself from stealing your pics from otheres. This pic was my wallpaper for a quite a days. Used to like watch the kid who loved me",
              "And this little 8th class nerd kid, The girl who started everything, The girl who tried ways to get my attention, The girl who went to extremes for me. I am still sorry for being so rude at that period of time.",
              "Idk if u remember, this was the first pic u sent me when we first got together like the 2nd day we got together if i'm not wrong. My first saved pic of yours. Sun kissing you just wow. Dude just dropped a sun kissed trend before it was viral",
              "And this pic, the first saree pic of yours idk if its half saree or a saree but still its my first one and its just one of my favourite one. Like its jus wow u look stunning in that pic. U will never no one how it felt for the first time seeing it.",
              "This pic comes to mind whenever i jus rewind our past. U sent this on one fine rainy day around 7-8pm i guess. i was like 'damnnnnnnn how gorgeous this girl is'  and was stunned for a second when u sent me this pic. Those days u used to make my jaw drop by sending ur pics randomly whenever u feel so",
              "This pic i actually got it from my brothers phone. U sent me this when we were chatting on my brothers whatsapp. It was so random and it felt sooo cute that it comes to my eyes whenever i think of u randomly. Fr i got addicted to your smile from this pic",
              "U know whats this pic to me. Its literally my lock screen wallpaper. i used to wake up seeing this pic like after i got out from my house. The amount of my love this pic owes is unimaginable. I could talk alot bout this. My stressbuster, my healer, my day maker, whenever i feel low or whenever i need you i used to see this pic and get better. I even felt like communicating with u whenever i see this pic. I used to even blush seeing this pic. Just my favourite one",
              "I actually sneaked into one of ur frnds account to save this pic like i got into one's account jus to see this pic in ur story. guess this was on our first breakup. i did save many of ur pics by sneaking to others account and this one is something special and has a place in heart",
              "This pic from our good patch up days. Sent to me to share ur trip experience. Its jus the smile of u making me rewatch this pic several times. Not joking but seriously u got something in ur smile it jus keeps me attracted to u whenever i see these pics",
              "Haha when cuteness meets another cuteness. Idk why i see this as a wholesome pic. That kid idk her name, aaradhana i guess idk but still u both add alot of cuteness to this pic and i adore ur childish thing in this pic. I see u as a small kid whenever i watch this photo. ",
              "This pic makes me miss you soo badly. Those days when u talked thro vid calls was fun and this cute moment from on of our vid call. Luckily i captured it.Often look at this to adore ur cuteness and get a smile by looking at ur smile.I wud cry even seeing this pic like start to miss those old days",
              "2nd sept 2024, when i came to see you alone like after 2 years i guess. got a time to take a beautiful pic of yours. This pic reminds me of how attached we were in the old days. i used to compliment u silently seeing this pic and even show this pic to others proudly seeing that this is my girlfriend. U looked absolutely stunning in this pic and i volunteerly removed my part of this pic to make sure i dont spoil the beauty u carry in this pic",
              "Your bday pic. When u turned 18 from minor to major. I was lucky to get some exclusive pics from u on ur bday but still this one stays in my eyes. that pretty outfit on u and that slight blush and that charming smile jus makes everything perfect and makes me rewatch it several times. U literally look like a cute doll and honestly this doll was the gift of my life",
              "Diwali celebration pic. We actually had a fight for me not complimentig u after sending this pic. U usually know me that i dont compliment directly. Fr when i first saw this saree pic i jus went to a extreme happiness which u never know. I called out my friends and said 'look at my girl,she wore the saree i selected and looks awesome in it'. I never thought u wud wear that saree which i chose i thought u had simply asked a suggestion as a formality but legit it made my day at that time. I didnt sleep i was just thinking of u getting myself happy and proud rewatching this pic all night damnn it was such a crazy day but ended up with a fight with u",
              "One of ur dp and one my collections of your dp. That overloaded cuteness in that pic. i used to get all the possible frnds acc to watch this dp when my acc was blocked. There were days where i spent watching ur dp the whole day when im upset or low. I would like crave for ur presence and ur sudden dp change wud heal me up and this ones my fav dp for sure.",
              "Its jus the eyes, jus the bloody damnnn eyes!! damn it gets me crazy. Its like pulling me to fall for u even deeper. I speak to this speak and i feel some replies from that eyes. That perfect smile and that litte circle tipped nose and that black n white pic and catchy eyes....damnnnnn i cant jus put up my feel in words. this pic of urs is juss fav one of mine i speak to this i cry i laugh i blush i jus spend time with this pic. Time flies when i see this pic. Like really u wont know the worth of this pic. U really made me think am i worthy enough for u after seeing this pic. Just a pieace of art",
              "This one, Idk who it is but this one stays in my home screen wallpaper for no reason. I wud imagine the guy right there is me. used to imagine the real u in that pic and me beside u. I wud laugh after seein this pic. I even tried to create a real pic with my face and yours eventually failed. But yea no matter who it is this ones my fav wholesome pic and my home screen wallpaper. will see it feel like im still connected to u",
  ];


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  if (!unlocked) {
    return <PasswordGate onSuccess={() => setUnlocked(true)} />;
  }

  const scrollToNext = () => {
    if (audioRef.current && !musicPlaying) {
      audioRef.current
        .play()
        .then(() => setMusicPlaying(true))
        .catch((err) => console.log("Autoplay blocked:", err));
    }
    nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const FloatingHearts = ({ count = 30, color = "pink", size = "md" }) => {
    const sizes = { sm: "w-4 h-4", md: "w-6 h-6", lg: "w-8 h-8" };
    const colors = {
      pink: "#ff7eb3",
      red: "#ff4d4d",
      white: "#ffffff",
      rose: "#ff758c",
    };
    return (
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {[...Array(count)].map((_, i) => {
          const startX = Math.random() * 100;
          const endX = startX + (Math.random() * 20 - 10);
          const duration = 8 + Math.random() * 10;
          const delay = Math.random() * 15;
          return (
            <div
              key={i}
              className={`absolute ${sizes[size]}`}
              style={{
                left: `${startX}%`,
                animation: `floatHeart ${duration}s linear infinite ${delay}s`,
                "--start-x": `${endX}px`,
                "--heart-color": colors[color],
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="var(--heart-color)"
                className="w-full h-full heart"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="font-sans relative overflow-hidden">
      {/* Landing Section */}
      <div
        data-aos="fade-up"
        className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-400 via-rose-400 to-pink-500 text-center px-4 z-10"
      >
        <FloatingHearts count={40} color="pink" size="lg" />
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white drop-shadow-lg animate-bounce glow-text">
          💖 To the purest soul ever 💖
        </h1>
        <p className="text-2xl text-white mt-4 animate-fadeIn">
          A little something I built to make you smile today ✨.
        </p>
        <p className="text-2xl text-white mt-4 animate-fadeIn">
          (Headphones recommended)
        </p>
        <button
          onClick={scrollToNext}
          className="mt-10 bg-white hover:bg-pink-100 text-pink-600 font-semibold py-3 px-8 rounded-full shadow-md transition-all hover:scale-105 text-lg"
        >
          Begin
        </button>
      </div>

      {/* Music toggle */}
      <div
        className="fixed bottom-6 right-6 bg-white text-pink-600 rounded-full p-3 shadow-lg cursor-pointer hover:scale-110 transition-all z-50"
        onClick={() => {
          if (musicPlaying) {
            audioRef.current.pause();
            setMusicPlaying(false);
          } else {
            audioRef.current.play();
            setMusicPlaying(true);
          }
        }}
      >
        {musicPlaying ? "⏸️" : "▶️"}
      </div>

      {/* Section 2: Welcome Message */}
      <div
        data-aos="fade-up"
        ref={nextSectionRef}
        className="relative min-h-screen bg-gradient-to-r from-rose-300 via-pink-300 to-rose-400 flex flex-col items-center justify-center px-6 text-center"
      >
        <FloatingHearts count={30} color="rose" />
        <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4 drop-shadow">
          <Typewriter
            words={[
              "Hi Shreenidhi 💕",
              "This website is just for you",
              "Just a website from a guy who thinks you are awesome.... ✨",
            ]}
            loop={100}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h2>
        <p className="text-xl text-white max-w-xl animate-fadeIn bg-white bg-opacity-30 px-6 py-4 rounded-xl shadow-md backdrop-blur-sm">
          Happy Birthday, Shreenidhi!!! … Happy Birthday, Shreenidhi!!!
          I honestly don’t know how to put this into fancy words, but today’s your day, and I just wanted to say you're seriously one of the purest soul I’ve ever met. You brought so much light, laughter, and gave me the love I craved for. I’m really glad I get to be a small part of your story. Hope your day is filled with good vibes, smiles, your favorite snacks, and the people you love. You deserve the best!!!, always. keep smiling with cuteness, keep making more memories and have a wonderfull year ahead
        </p>
      </div>

 {/* Section 3: Memory Lane */}
<div
  data-aos="fade-up"
  className="relative min-h-screen bg-gradient-to-b from-rose-300 to-pink-400 flex flex-col items-center justify-center px-6 py-12"
>
  <FloatingHearts count={50} color="red" />
  <h2 className="text-4xl font-bold text-white mb-10 drop-shadow-lg">
    Birthday dumps
  </h2>

  <div className="w-full max-w-4xl space-y-12">
    {pics.map((pic, index) => (
      <div
        key={index}
        data-aos="fade-up"
        className={`flex flex-col sm:flex-row items-center justify-between gap-6 ${
          index % 2 === 0 ? "sm:flex-row-reverse" : ""
        }`}
      >
        <div className="relative w-full sm:w-1/2 overflow-hidden rounded-3xl shadow-xl transition-transform hover:scale-105 duration-300">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
          <img
            src={pic}
            alt={`Memory ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="sm:w-1/2 text-lg text-white drop-shadow-md">{messages[index]}</p>
      </div>
    ))}
  </div>
</div>


      {/* Section 4: Floating Love Letter */}
      <div
        data-aos="fade-up"
        className="relative min-h-screen bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center px-6 py-16"
      >
        <FloatingHearts count={20} color="rose" />
        <div
          className={`w-full max-w-md perspective transition-all duration-500 ${
            isLetterOpen ? "scale-110" : "scale-100"
          }`}
          onClick={() => setIsLetterOpen(!isLetterOpen)}
        >
          <div
            className={`relative w-full h-64 transition-transform duration-700 transform-style preserve-3d ${
              isLetterOpen ? "rotate-y-180" : ""
            }`}
          >
            <div className="absolute w-full h-full bg-white/30 backdrop-blur-sm rounded-3xl flex items-center justify-center text-white text-2xl font-bold backface-hidden shadow-lg border-2 border-white/30">
              💌 Tap to Open
            </div>
            <div className="absolute w-full h-full bg-white/90 backdrop-blur-sm rounded-3xl p-6 text-pink-700 text-lg backface-hidden rotate-y-180 shadow-xl overflow-y-auto border-2 border-white/30">
              <p>
                Dear Shreenidhi, <br />
                <br />
                I made this little space on the internet just for you. Each pic starting from ur childhood to till now ,added to jus make u revisit ur whole life .
                every word is from my heart and i used this space to express my hidden feelings and compliments that i've never told u. You've brought joy, strength, and so much love into my life.
                No matter how we are now, u will always be the angel of my life. ill still say that u r a gift i got easily and the most precious one too. this is just to show much i do care and love you
                 <br /><br /> <br />
                <br />
                With all my heart, <br />
                Vishal
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: Apology & Gratitude */}
      <div
        data-aos="fade-up"
        className="relative min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-br from-rose-600 to-pink-700"
      >
        <FloatingHearts count={50} color="white" />
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 max-w-3xl shadow-2xl text-center z-10 border-2 border-white/30">
          <h2 className="text-4xl text-rose-700 font-bold mb-4">
            One last words.......
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            It was me , who messed up, who lied to u, who broke ur trust, who was lathagic bout the rs. I cant undo the things i did  <br /><br />
            I am sorry for everything i got alot to say but nothing can sort out anymore.
            Ive been following you for days and im so happy for you, good to see you happy and i wish u stay the same forever with a warm and cute smile.

            Tho we arent together now, i will always cherish the days i spent with you, i will always be proud to have you in my life and you know go talking about you to everyone, u will always be my angel of my life my lucky charm and my everything.

            I wish to have you maybe in another universe or something in a fantasy ways possible. until then im going on away from you now...... leaving everything behind and jus taking our memories. I will for sure love you for my lifetime and wait for u patiently.<br /><br />

            I LOVE YOU ALWAYS, MORE THAN U THINK LESS THAN YOU DO,ALWAYS!!!!
          </p>
        </div>
      </div>

      {/* Section 6: Final Magic & Video */}
      <div
        data-aos="fade-up"
        className="relative min-h-screen bg-gradient-to-br from-pink-700 to-rose-800 flex flex-col items-center justify-center px-6 py-16 text-center overflow-hidden"
      >
        <FloatingHearts count={50} color="white" />
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                opacity: 0,
              }}
            />
          ))}
        </div>

        <div className="z-10 flex flex-col items-center">
          <h2 className="text-6xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-white drop-shadow-lg mb-6 animate-pulse">
            I LOVE YOU 💖
          </h2>
          <p className="text-white text-xl sm:text-2xl max-w-2xl mx-auto backdrop-blur-sm bg-white/10 px-6 py-4 rounded-xl">
            Thank you for being the light of my life. <br />
            This website is just a small piece of what you mean to me. <br />
            Forever and always, Vishal
          </p>

          <button
            onClick={() => {
              if (audioRef.current) audioRef.current.pause();
              setShowVideo(true);
            }}
            className="mt-10 bg-white hover:bg-pink-100 text-pink-600 py-3 px-8 rounded-full shadow-lg text-lg transition-all font-semibold"
          >
            One last from my heart
          </button>

          {showVideo && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
              <button
                onClick={() => {
                  setShowVideo(false);
                  if (audioRef.current) {
                    audioRef.current.play().catch(() => {});
                  }
                }}
                className="absolute top-4 right-4 text-white text-3xl z-50 hover:text-pink-300"
              >
                ×
              </button>

              <video controls>
  <source src={videoFile} type="video/mp4" />
  Your browser does not support the video tag.
</video>

            </div>
          )}
        </div>
      </div>

      {/* Audio */}
      <audio ref={audioRef} loop>
  <source src={audioFile} type="audio/mp3" />
</audio>

    </div>
  );
}

export default App;
