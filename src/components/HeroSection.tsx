import { useState, useEffect, useRef } from "react";
import { ChevronDown, Hand, VolumeX, Volume2 } from "lucide-react";
import Player from "@vimeo/player";

interface HeroProps {
  onOpenModal: () => void;
}

const HeroSection = ({ onOpenModal }: HeroProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [hasReachedThreshold, setHasReachedThreshold] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef<Player | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const player = new Player(containerRef.current, {
        id: 1181629616,
        background: false,
        autoplay: true,
        muted: true,
        loop: true,
        transparent: true,
        controls: true,
        responsive: true,
      });

      playerRef.current = player;

      player.on("timeupdate", (data) => {
        const percentage = (data.seconds / data.duration) * 100;
        setProgress(percentage);
        if (percentage >= 90) {  
          setHasReachedThreshold(true);
        }
      });

      player.on("play", () => {
        setIsPlaying(true);
        setHasPlayedOnce(true);
        setIsInitialLoading(false);
      });
      player.on("pause", () => setIsPlaying(false));
      player.on("ended", () => setProgress(100));

      // Retraso de 2 segundos para "Carga" inicial
      const timer = setTimeout(() => {
        player.play().catch((err) => {
          console.warn("Autoplay blocked or failed:", err);
          setIsInitialLoading(false);
        });
      }, 500);

      return () => {
        clearTimeout(timer);
        player.destroy();
      };
    }
  }, []);

  const togglePlay = () => {
    if (!playerRef.current) return;

    if (isPlaying) {
      // Si está en mute, primero activar sonido (no pausar)
      if (isMuted) {
        playerRef.current.setMuted(false)
          .then(() => playerRef.current?.setVolume(1))
          .then(() => {
            setIsMuted(false);
            return playerRef.current?.play();
          })
          .catch(() => {});
        return;
      }
      playerRef.current.pause();
    } else {
      playerRef.current.play();
    }
  };

  const handleUnmute = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (!playerRef.current) return;
    playerRef.current.setMuted(false)
      .then(() => playerRef.current?.setVolume(1))
      .then(() => {
        setIsMuted(false);
        // Asegurar que el video siga reproduciéndose
        return playerRef.current?.play();
      })
      .catch(() => {});
  };

  return (
    <section
      className="px-5 md:px-[60px] pt-8 pb-10 md:pb-14 text-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 75% 55% at 50% 0%, rgba(93,187,60,.09) 0%, transparent 68%)",
      }}
    >
      <div className="animate-fade-up inline-flex items-center gap-2 bg-[rgba(93,187,60,.08)] border border-border-green rounded-full px-[18px] py-1.5 text-[11px] font-bold tracking-[2.5px] uppercase text-primary mb-7">
        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-blink" />
        Este video se eliminará pronto
      </div>

      <h1 className="animate-fade-up font-display font-bold text-[clamp(32px,5.8vw,70px)] leading-[1.5] text-white max-w-[920px] mx-auto mb-2.5 uppercase tracking-tight">
        <span className="block text-primary text-[.72em] tracking-normal normal-case italic mb-2 underline">
          ¡FINALMENTE! la respuesta para los dueños que no aguantan un día más
          en su taller.
        </span>
      </h1>

      <p className="animate-fade-up-1 text-[clamp(17px,2.2vw,22px)] text-white max-w-[680px] mx-auto mt-5 mb-1.5 font-light leading-relaxed">
        Esta presentación revela cómo aumentar la productividad de tu taller
        hasta en un <strong className="text-white font-bold">40%</strong> y
        ahorrar hasta{" "}
        <strong className="text-white font-bold">
          90 minutos por vehículo atendido
        </strong>{" "}
        con un{" "}
        <strong className="font-semibold text-primary">
          SISTEMA DE GESTIÓN.
        </strong>
      </p>

      <p className="animate-fade-up-2 text-[clamp(15px,1.8vw,18px)] text-foreground font-bold mb-2 pt-6">
        ¡DALE CLICK ABAJO!
      </p>

      <div className="flex flex-col items-center gap-0 animate-fade-in-up animation-delay-600">
        <div className="bounce-arrow">
          <ChevronDown
            className="w-8 h-8 sm:w-10 sm:h-10 text-primary"
            strokeWidth={3}
          />
        </div>
      </div>

      <div
        className={`animate-fade-up-3 max-w-[880px] mx-auto pt-6 px-0 md:px-[60px] transition-all duration-500 ${hasReachedThreshold ? "mb-10" : "mb-60"}`}
      >
        <div
          onClick={togglePlay}
          className="bg-[#121f32]/60 backdrop-blur-md border border-[#80ed21]/30 rounded-[14px] overflow-hidden aspect-video relative flex items-center justify-center cursor-pointer group"
          style={{
            boxShadow:
              "0 0 100px rgba(128, 237, 33, 0.15), 0 40px 100px rgba(0,0,0,0.8)",
          }}
        >
          {/* Vimeo Container */}
          <div
            ref={containerRef}
            className={`absolute inset-0 w-full h-full [&_iframe]:w-full [&_iframe]:h-full [&_iframe]:absolute [&_iframe]:inset-0 [&_iframe]:object-cover ${!isPlaying ? "pointer-events-none" : ""}`}
          >
            {/* The Vimeo Player will be mounted here */}
          </div>

          {/* Overlay for Darkening and Interactions */}
          <div
            className={`absolute inset-0 transition-opacity duration-300 z-20 flex items-center justify-center p-4 ${isPlaying || (!hasPlayedOnce && !isInitialLoading) ? "opacity-0 pointer-events-none" : "opacity-100 bg-black/80"}`}
          >
            <div className="flex flex-col items-center max-w-[620px] w-full">
              {isInitialLoading && (
                /* ESTADO CARGANDO: Spinner Profesional */
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
                  <p className="text-white/60 font-medium text-sm uppercase tracking-[0.2em] animate-pulse">
                    Cargando presentación...
                  </p>
                </div>
              )}

              {hasPlayedOnce && !isPlaying && (
                /* ESTADO PAUSA: Alerta de Atención Original */
                <>
                  <div className="flex items-center gap-4 md:gap-8 mb-6 md:mb-10 w-full justify-center">
                    <div className="text-left flex-1">
                      <h2 className="text-yellow-400 font-display font-black text-[clamp(24px,6vw,56px)] uppercase leading-none mb-2 tracking-tight">
                        ¡ATENCIÓN!
                      </h2>
                      <p className="text-white font-bold text-[clamp(12px,2.5vw,22px)] leading-tight uppercase tracking-tight">
                        ESTA ES LA ÚLTIMA OPORTUNIDAD PARA VERLO HASTA EL FINAL
                      </p>
                    </div>
                  </div>

                  {/* Botón Rojo Profesional */}
                  <div className="relative transform transition-transform hover:scale-105 active:scale-95 cursor-pointer">
                    <div className="bg-[#D0021B] text-white font-black text-[clamp(14px,2.5vw,26px)] py-4 px-10 md:px-14 rounded-full shadow-[0_0_60px_rgba(208,2,27,0.5)] border-2 border-white/20 uppercase tracking-tight">
                      ¡Toca aquí para seguir viendo!
                    </div>
                    {/* Cursor de Mano HD */}
                    <div className="absolute -bottom-8 -right-4 md:-right-8 w-12 md:w-16 h-12 md:h-16 pointer-events-none drop-shadow-2xl text-white">
                      <Hand className="w-full h-full fill-white/20" strokeWidth={1.5} />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Unmute Overlay Banner */}
          {isPlaying && isMuted && (
            <div
              onClick={handleUnmute}
              className="absolute inset-0 z-30 bg-purple-700/80 cursor-pointer transition-all duration-300 hover:bg-purple-600/80 flex items-center justify-center"
            >
              <div className="flex flex-col items-center gap-2">
                <p className="text-white font-black text-[clamp(14px,2.5vw,20px)] uppercase tracking-wide">
                  Tu video ha comenzado
                </p>
                <VolumeX className="w-10 h-10 md:w-14 md:h-14 text-white drop-shadow-lg" strokeWidth={2} />
                <p className="text-white font-bold text-[clamp(13px,2.2vw,18px)] tracking-wide">
                  Haz clic para escuchar
                </p>
              </div>
            </div>
          )}

          {/* Custom Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-2 bg-white/10 overflow-hidden z-30">
            <div
              className="h-full bg-red-600 transition-all duration-300 ease-linear shadow-[0_0_15px_rgba(220,38,38,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {hasReachedThreshold && (
        <div className="text-center mb-16 animate-fade-up">
          <button
            onClick={onOpenModal}
            className="animate-pulse-glow inline-flex items-center gap-3 bg-primary text-white font-display font-extrabold text-[18px] tracking-wider uppercase px-6 py-4 rounded-lg border-none hover:bg-primary-dark hover:-translate-y-0.5 gradient-glow text-primary-foreground shadow-neon-strong glow-pulse cursor-pointer transition-all duration-300 ease-out"
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Agendar mi Demo Gratis
          </button>
          <p className="text-[13px] text-primary font-semibold mt-6 ">
            Recibes <span className="text-red-500">$750 USD</span> en
            bonificación al comprar tu plan
          </p>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
