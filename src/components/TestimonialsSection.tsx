import React, { useCallback, useState, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const videos = [
  {
    url: "https://s3.us-east-1.amazonaws.com/cdn.media-349771550884-us-east-1-an/testimonio-mx.mp4",
  },
  {
    url: "https://s3.us-east-1.amazonaws.com/cdn.media-349771550884-us-east-1-an/testimonio-oseas-arguello.mp4",
  },
  {
    url: "https://s3.us-east-1.amazonaws.com/cdn.media-349771550884-us-east-1-an/testimonio-taller-camargo-brothers.mp4",
  },
  {
    url: "https://s3.us-east-1.amazonaws.com/cdn.media-349771550884-us-east-1-an/testimonio-vinicio.mp4",
  },
  {
    url: "https://s3.us-east-1.amazonaws.com/cdn.media-349771550884-us-east-1-an/testimonio-diego.mp4",
  },
];

const whatsappReviews = [
  "https://s3.us-east-1.amazonaws.com/cdn.media-349771550884-us-east-1-an/cap101913.webp",
  "https://s3.us-east-1.amazonaws.com/cdn.media-349771550884-us-east-1-an/cap101853.webp",
  "https://s3.us-east-1.amazonaws.com/cdn.media-349771550884-us-east-1-an/cap101811.webp",
  "https://s3.us-east-1.amazonaws.com/cdn.media-349771550884-us-east-1-an/cap101705.webp",
  "https://s3.us-east-1.amazonaws.com/cdn.media-349771550884-us-east-1-an/cap101626.webp",
];

const TestimonialsSection = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 500px)": { slidesToScroll: 1 },
      "(min-width: 700px)": { slidesToScroll: 1 },
    },
  });

  useEffect(() => {
    // Sincronización robusta: Pausar todos los videos que no sean el activo
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (activeVideo === i) {
        video.muted = false;
        video.play().catch(() => {});
      } else {
        video.pause();
        video.muted = true;
        if (activeVideo === null) {
          video.currentTime = 0;
        }
      }
    });

    // Cerrar/pausar si se hace click fuera del carrusel
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (activeVideo !== null && !target.closest(".group\\/video")) {
        setActiveVideo(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [activeVideo]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="bg-secondary border-t border-b border-border py-20 px-0 md:px-10 overflow-hidden">
      <div className="max-w-[1140px] mx-auto">
        <div className="text-center mb-16 px-3">
          <h2 className="font-display text-[clamp(20px,3.2vw,36px)] leading-tight font-black uppercase text-white tracking-tight italic underline">
            Esto dicen los dueños de taller que ya{" "}
            <span className="text-primary">dieron el salto</span>
          </h2>
        </div>

        {/* Carrusel de Videos */}
        <div className="relative mb-16 group">
          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            ref={emblaRef}
          >
            <div className="flex -ml-4">
              {videos.map((v, index) => (
                <div
                  key={index}
                  className="flex-[0_0_70%] min-w-0 pl-4 sm:flex-[0_0_45%] lg:flex-[0_0_30%]"
                >
                  <div className="bg-card border border-border rounded-2xl overflow-hidden aspect-[9/16] relative group/video shadow-2xl transition-transform duration-500 group-[.is-selected]:scale-100 scale-90">
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={v.url}
                      className="w-full h-full object-cover"
                      playsInline
                      muted={activeVideo !== index}
                      controls={activeVideo === index}
                      onMouseOver={(e) => {
                        if (activeVideo === null) {
                          (e.target as HTMLVideoElement).play().catch(() => {});
                        }
                      }}
                      onMouseOut={(e) => {
                        if (activeVideo === null) {
                          const video = e.target as HTMLVideoElement;
                          video.pause();
                          video.currentTime = 0;
                        }
                      }}
                      onClick={() => {
                        if (activeVideo === index) {
                          setActiveVideo(null);
                        } else {
                          setActiveVideo(index);
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover/video:bg-transparent transition-colors flex flex-col items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 bg-primary/90 text-black rounded-full flex items-center justify-center opacity-100 group-hover/video:opacity-0 transition-opacity transform group-hover/video:scale-150 duration-500">
                        <Play size={32} fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <span className="text-white font-bold text-sm tracking-wide"></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botones de Navegación */}
          <button
            onClick={scrollPrev}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all z-20 shadow-xl opacity-0 group-hover:opacity-100"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all z-20 shadow-xl opacity-0 group-hover:opacity-100"
            aria-label="Siguiente"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Reseñas de WhatsApp (Imágenes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
          {whatsappReviews.map((imgSrc, i) => (
            <div
              key={i}
              className="group relative overflow-hidden bg-gradient-to-br from-[#1b4311] via-[#121f32] to-[#121f32] border border-[#80ed21]/40 rounded-[32px] p-5 flex flex-col items-center justify-center transition-all duration-700 hover:-translate-y-4 hover:border-[#80ed21] shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
            >
              {/* Destello central potente para dar color al fondo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-[#80ed21]/15 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

              {/* Borde de luz dinámico en la parte superior */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#80ed21]/60 to-transparent opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative z-10 w-full rounded-[24px] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-105">
                <img
                  src={imgSrc}
                  alt={`Testimonio WhatsApp ${i + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
