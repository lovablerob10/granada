import React from 'react';
import {
    AbsoluteFill,
    interpolate,
    spring,
    useCurrentFrame,
    useVideoConfig,
    Easing,
} from 'remotion';

const GRENADE_COLOR = '#8b0000';
const GOLD_COLOR = '#d4af37';

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
    const distance = interpolate(progress, [0, 1], [0, 500], {
        easing: Easing.out(Easing.exp),
    });

    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    const opacity = interpolate(progress, [0.8, 1], [1, 0]);
    const scale = interpolate(progress, [0, 1], [4, 1]);

    return (
        <div
            style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                width: 8,
                height: 8,
                backgroundColor: GOLD_COLOR,
                boxShadow: `0 0 10px ${GOLD_COLOR}`,
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

    // 1. Grenade Entry
    const grenadeSpring = spring({
        frame,
        fps,
        config: { damping: 12 },
    });

    const grenadeScale = interpolate(grenadeSpring, [0, 1], [0, 1.2]);
    const grenadeRotation = interpolate(frame, [0, 60], [-45, 0], {
        easing: Easing.out(Easing.quad),
    });

    // 2. Explosion at frame 45
    const explosionFrame = 45;
    const explosionSpring = spring({
        frame: frame - explosionFrame,
        fps,
    });

    const flashOpacity = interpolate(frame, [explosionFrame, explosionFrame + 5], [0, 1], {
        extrapolateRight: 'clamp',
    }) - interpolate(frame, [explosionFrame + 5, explosionFrame + 20], [0, 1], {
        extrapolateRight: 'clamp',
    });

    return (
        <AbsoluteFill style={{ backgroundColor: '#0a0a0a', overflow: 'hidden' }}>
            {/* Background Glow */}
            <div
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    background: `radial-gradient(circle, ${GRENADE_COLOR}33 0%, transparent 70%)`,
                    opacity: grenadeSpring,
                }}
            />

            {/* Explosion Particles */}
            {frame >= explosionFrame &&
                Array.from({ length: 40 }).map((_, i) => (
                    <Particle key={i} index={i} count={40} delay={explosionFrame} />
                ))
            }

            {/* The Grenade (SVG) */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    transform: `scale(${grenadeScale}) rotate(${grenadeRotation}deg)`,
                }}
            >
                <svg width="300" height="400" viewBox="0 0 100 130">
                    {/* Grenade Body */}
                    <path
                        d="M50 30 C30 30 15 45 15 75 C15 105 30 120 50 120 C70 120 85 105 85 75 C85 45 70 30 50 30 Z"
                        fill={GRENADE_COLOR}
                        stroke={GOLD_COLOR}
                        strokeWidth="2"
                    />
                    {/* Detail lines */}
                    <path d="M25 50 Q50 45 75 50" fill="none" stroke={GOLD_COLOR} strokeWidth="1" opacity="0.5" />
                    <path d="M20 75 Q50 70 80 75" fill="none" stroke={GOLD_COLOR} strokeWidth="1" opacity="0.5" />
                    <path d="M25 100 Q50 95 75 100" fill="none" stroke={GOLD_COLOR} strokeWidth="1" opacity="0.5" />
                    {/* Handle/Pin */}
                    <rect x="42" y="10" width="16" height="20" rx="4" fill="#333" stroke={GOLD_COLOR} strokeWidth="1" />
                    <circle cx="58" cy="15" r="8" fill="none" stroke={GOLD_COLOR} strokeWidth="2" />
                </svg>
            </div>

            {/* Flash Effect */}
            <div
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                    opacity: flashOpacity,
                }}
            />

            {/* Title Fade In after explosion */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '20%',
                    width: '100%',
                    textAlign: 'center',
                    color: GOLD_COLOR,
                    fontFamily: 'Bebas Neue',
                    fontSize: 80,
                    opacity: explosionSpring,
                    transform: `translateY(${interpolate(explosionSpring, [0, 1], [50, 0])}px)`,
                    textShadow: `0 0 20px ${GOLD_COLOR}66`,
                }}
            >
                GRANADA
            </div>
        </AbsoluteFill>
    );
};
