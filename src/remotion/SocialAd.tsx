import React from 'react';
import {
    AbsoluteFill,
    interpolate,
    spring,
    useCurrentFrame,
    useVideoConfig,
    Sequence,
} from 'remotion';

const BebasFont = {
    fontFamily: 'Bebas Neue, sans-serif',
};

const ImpactShake = (frame: number, fps: number, delay: number) => {
    const shake = spring({
        frame: frame - delay,
        fps,
        config: { stiffness: 1000, damping: 5 },
    });
    return Math.sin(frame * 2) * (1 - shake) * 20;
};

const CinematicText: React.FC<{ text: string; frame: number; fps: number; delay: number }> = ({ text, frame, fps, delay }) => {
    const entrance = spring({
        frame: frame - delay,
        fps,
        config: { stiffness: 100, damping: 20 },
    });

    const opacity = interpolate(entrance, [0, 1], [0, 1]);
    const blur = interpolate(entrance, [0, 1], [20, 0]);
    const scale = interpolate(entrance, [0, 1], [2, 1]);

    return (
        <div style={{
            opacity,
            filter: `blur(${blur}px)`,
            transform: `scale(${scale})`,
            display: 'flex',
            justifyContent: 'center'
        }}>
            <h2 style={{
                ...BebasFont,
                fontSize: 160,
                color: 'white',
                letterSpacing: 10,
                textShadow: '0 0 30px rgba(212,17,17,0.8)',
            }}>{text}</h2>
        </div>
    );
};

export const SocialAd: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // Physics constants
    const impactFrame = 15;
    const finalRevealFrame = 100;

    // Camera dynamics
    const shakeX = ImpactShake(frame, fps, impactFrame);
    const cameraScale = interpolate(frame, [0, impactFrame, finalRevealFrame], [1.1, 1, 1.05]);

    return (
        <AbsoluteFill style={{
            backgroundColor: '#000000',
            overflow: 'hidden',
            transform: `scale(${cameraScale}) rotate(${shakeX * 0.1}deg) translateX(${shakeX}px)`
        }}>
            {/* BACKGROUND: Parallax Stadium */}
            <AbsoluteFill style={{
                transform: `scale(1.2) translateY(${frame * 0.5}px)`,
                opacity: 0.4
            }}>
                <img
                    src="/stadium-vibe.png"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) contrast(150%) brightness(50%)' }}
                    alt="Stadium"
                />
            </AbsoluteFill>

            {/* Cinematic Red Vibe Overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(212,17,17,0.2), rgba(0,0,0,0.8))',
            }} />

            {/* SCENE 1: THE IMPACT */}
            <Sequence from={0} durationInFrames={fps * 2}>
                <AbsoluteFill style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{
                        transform: `scale(${interpolate(spring({ frame, fps, config: { stiffness: 200 } }), [0, 1], [0.5, 1.5])})`,
                        opacity: interpolate(frame, [0, 5, 45, 50], [0, 1, 1, 0]),
                        filter: frame > impactFrame ? 'drop-shadow(0 0 50px rgba(212,17,17,1))' : 'none'
                    }}>
                        <img src="/icone-granada.png" style={{ width: 400 }} alt="Granada" />
                    </div>
                </AbsoluteFill>
            </Sequence>

            {/* SCENE 2: KINETIC WORDS */}
            <Sequence from={fps * 1.5} durationInFrames={fps * 2}>
                <AbsoluteFill style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    {frame >= fps * 1.5 && <CinematicText text="SINTA" frame={frame} fps={fps} delay={fps * 1.5} />}
                    <div style={{ marginTop: -80 }}>
                        {frame >= fps * 2 && <CinematicText text="EXPLODA" frame={frame} fps={fps} delay={fps * 2} />}
                    </div>
                </AbsoluteFill>
            </Sequence>

            {/* SCENE 3: PREMIUM REVEAL */}
            <Sequence from={90}>
                <AbsoluteFill style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    {/* Floating Phone with Glow */}
                    <div style={{
                        transform: `translateY(${interpolate(spring({ frame: frame - 90, fps }), [0, 1], [600, 0])}px)`,
                        position: 'relative'
                    }}>
                        <div style={{
                            position: 'absolute',
                            inset: -20,
                            background: 'rgba(212,175,55,0.2)',
                            filter: 'blur(40px)',
                            borderRadius: 40,
                        }} />
                        <div style={{
                            width: 320,
                            height: 600,
                            border: '10px solid #222',
                            borderRadius: 40,
                            background: '#0a0a0a',
                            overflow: 'hidden',
                        }}>
                            <div style={{ height: 120, borderBottom: '1px solid #333', display: 'flex', alignItems: 'center', padding: 30 }}>
                                <div style={{ width: 50, height: 50, border: '2px solid #d41111', borderRadius: '50%' }} />
                            </div>
                            <div style={{ padding: 40, display: 'flex', flexDirection: 'column', gap: 20 }}>
                                <div style={{ height: 10, width: '100%', background: '#333' }} />
                                <div style={{ height: 10, width: '80%', background: '#333' }} />
                                <div style={{ height: 200, width: '100%', background: 'linear-gradient(135deg, #d4af37, #8b4513)', marginTop: 20 }} />
                            </div>
                        </div>
                    </div>

                    <h3 style={{
                        ...BebasFont,
                        fontSize: 100,
                        color: '#d4af37',
                        marginTop: 40,
                        letterSpacing: 15,
                        opacity: interpolate(frame, [110, 125], [0, 1]),
                        textShadow: '0 0 20px rgba(212,175,55,0.5)'
                    }}>LENDÁRIO</h3>
                </AbsoluteFill>
            </Sequence>

            {/* CINEMATIC OVERLAYS */}
            {/* Grain */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")',
                opacity: 0.05,
                pointerEvents: 'none'
            }} />

            {/* Top/Bottom Bars Transition */}
            <div style={{
                position: 'absolute',
                top: 0,
                width: '100%',
                height: interpolate(frame, [0, 10], [150, 0]),
                backgroundColor: 'black'
            }} />
            <div style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                height: interpolate(frame, [0, 10], [150, 0]),
                backgroundColor: 'black'
            }} />
        </AbsoluteFill>
    );
};
