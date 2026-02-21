import React from 'react';
import {
    AbsoluteFill,
    interpolate,
    spring,
    useCurrentFrame,
    useVideoConfig,
    Easing,
} from 'remotion';

const RED_COLOR = '#d41111';
const WHITE_COLOR = '#ffffff';

const Particle: React.FC<{
    index: number;
    count: number;
    delay: number;
}> = ({ index, count, delay }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const progress = spring({
        frame: frame - delay,
        fps,
        config: { damping: 20 },
    });

    const angle = (index / count) * Math.PI * 2;
    const distance = interpolate(progress, [0, 1], [0, 600], {
        easing: Easing.out(Easing.exp),
    });

    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    const opacity = interpolate(progress, [0.8, 1], [1, 0]);
    const scale = interpolate(progress, [0, 1], [5, 1]);

    return (
        <div
            style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                width: 6,
                height: 6,
                backgroundColor: index % 2 === 0 ? RED_COLOR : WHITE_COLOR,
                boxShadow: `0 0 15px ${index % 2 === 0 ? RED_COLOR : WHITE_COLOR}`,
                borderRadius: '50%',
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${scale})`,
                opacity,
            }}
        />
    );
};

export const HeroVideo: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // 1. Icon Entry (icone-granada.png)
    // Starts at frame 10, peaks at frame 25
    const iconEntrySpring = spring({
        frame: frame - 10,
        fps,
        config: { damping: 10, mass: 1.2 },
    });

    const iconScale = interpolate(iconEntrySpring, [0, 1], [0, 1.2], {
        extrapolateRight: 'clamp',
    });

    // 2. Detonation / Explosion
    // Sync with the icon peak (frame 25)
    const explosionFrame = 25;

    const flashOpacity = interpolate(frame, [explosionFrame, explosionFrame + 3], [0, 0.8], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
    }) - interpolate(frame, [explosionFrame + 3, explosionFrame + 15], [0, 0.8], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
    });

    // 3. Logo Reveal (logo-text.png)
    // Starts after the flash (frame 35)
    const logoRevealSpring = spring({
        frame: frame - 35,
        fps,
        config: { damping: 15 },
    });

    const logoOpacity = interpolate(logoRevealSpring, [0, 1], [0, 1]);
    const logoYOffset = interpolate(logoRevealSpring, [0, 1], [50, 0]);

    // Subtle breathing effect for the icon after it settles
    const breathing = Math.sin(frame / 15) * 0.05;
    const finalIconScale = iconScale + (frame > 30 ? breathing : 0);

    return (
        <AbsoluteFill style={{ backgroundColor: '#000000', overflow: 'hidden' }}>
            {/* Background Atmosphere - Solid black transition */}
            <div
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    background: `radial-gradient(circle at center, ${RED_COLOR}22 0%, #000000 100%)`,
                    opacity: iconEntrySpring,
                }}
            />

            {/* Explosion Particles */}
            {frame >= explosionFrame &&
                Array.from({ length: 60 }).map((_, i) => (
                    <Particle key={i} index={i} count={60} delay={explosionFrame} />
                ))
            }

            {/* The Cinematic Layout */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    width: '100%',
                    transform: 'translateY(-150px)', // Move as imagens para cima
                }}
            >
                {/* The Granada Icon */}
                <div
                    style={{
                        width: 350,
                        height: 350,
                        transform: `scale(${finalIconScale})`,
                        zIndex: 2,
                        filter: `drop-shadow(0 0 30px ${RED_COLOR}${interpolate(iconEntrySpring, [0, 1], [0, 40])})`,
                    }}
                >
                    <img
                        src="/icone-granada.png"
                        alt="Granada Icon"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                        }}
                    />
                </div>

                {/* The Logo Text */}
                <div
                    style={{
                        width: 600,
                        marginTop: -110, // Aumentado para sobrepor o ícone
                        opacity: logoOpacity,
                        transform: `translateY(${logoYOffset}px)`,
                        zIndex: 3, // Trazido para a frente do ícone (que está no zIndex 2)
                    }}
                >
                    <img
                        src="/logo-text.png"
                        alt="Granada Logo Text"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                    />
                </div>
            </div>

            {/* Impact Flash */}
            <div
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                    opacity: flashOpacity,
                    pointerEvents: 'none',
                }}
            />
        </AbsoluteFill>
    );
};
