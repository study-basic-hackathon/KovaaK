"use client"
import { type FC, useEffect } from "react"
import { useRouter } from "next/navigation"
import { RoomCondition } from "@/types/room-condition"
import { useAppSelector } from "@/stores"

const Matching: FC = () => {
  const { roomName, roomCondition, members } = useAppSelector(
    (state) => state.roomInfo
  );
  const router = useRouter();

  useEffect(() => {
    if (roomCondition === RoomCondition.Progressing) {
      router.push("/question")
    }
  }, [roomCondition, router])

  const onClick = async () => {
    try {
      const body = { roomName: roomName }
      const res = await fetch("/api/room/start", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })

      if (res.ok) {
        console.log("Room started successfully")
      }
    } catch (error) {
      console.error("Failed to start room:", error)
    }
  }

  return (
    <div className="matching-container">
      <style jsx>{`
        .matching-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif;
          min-height: 100vh;
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }

        /* 歩いている人のアニメーション背景 */
        .walking-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .walking-person {
          position: absolute;
          width: 60px;
          height: 80px;
          opacity: 0.1;
        }

        .person-body {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .person-head {
          width: 20px;
          height: 20px;
          background: #4a5568;
          border-radius: 50%;
          margin: 0 auto 5px;
          animation: headBob 1s ease-in-out infinite;
        }

        .person-torso {
          width: 25px;
          height: 35px;
          background: #4a5568;
          margin: 0 auto 5px;
          border-radius: 5px;
        }

        .person-legs {
          position: relative;
          width: 100%;
          height: 20px;
        }

        .person-leg {
          position: absolute;
          width: 8px;
          height: 20px;
          background: #4a5568;
          border-radius: 4px;
          bottom: 0;
        }

        .person-leg.left {
          left: 20px;
          animation: leftLeg 1s ease-in-out infinite;
        }

        .person-leg.right {
          right: 20px;
          animation: rightLeg 1s ease-in-out infinite;
        }

        /* 歩行アニメーション */
        @keyframes headBob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }

        @keyframes leftLeg {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          50% { transform: rotate(0deg); }
          75% { transform: rotate(-20deg); }
          100% { transform: rotate(0deg); }
        }

        @keyframes rightLeg {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(-20deg); }
          50% { transform: rotate(0deg); }
          75% { transform: rotate(20deg); }
          100% { transform: rotate(0deg); }
        }

        /* 移動アニメーション */
        @keyframes walkAcross {
          0% { transform: translateX(-100px); }
          100% { transform: translateX(calc(100vw + 100px)); }
        }

        /* 赤色の人 */
        .person-1 .person-head,
        .person-1 .person-torso,
        .person-1 .person-leg {
          background: #dc2626;
        }

        .person-1 {
          top: 10%;
          animation: walkAcross 18s linear infinite;
          animation-delay: 0s;
          opacity: 0.4;
        }

        /* 青色の人 */
        .person-2 .person-head,
        .person-2 .person-torso,
        .person-2 .person-leg {
          background: #2563eb;
        }

        .person-2 {
          top: 25%;
          animation: walkAcross 32s linear infinite;
          animation-delay: -3s;
          opacity: 0.35;
        }

        /* 緑色の人 */
        .person-3 .person-head,
        .person-3 .person-torso,
        .person-3 .person-leg {
          background: #16a34a;
        }

        .person-3 {
          top: 40%;
          animation: walkAcross 15s linear infinite;
          animation-delay: -8s;
          opacity: 0.45;
        }

        /* 黄色の人 */
        .person-4 .person-head,
        .person-4 .person-torso,
        .person-4 .person-leg {
          background: #ca8a04;
        }

        .person-4 {
          top: 55%;
          animation: walkAcross 28s linear infinite;
          animation-delay: -12s;
          opacity: 0.3;
        }

        /* 茶色の人 */
        .person-5 .person-head,
        .person-5 .person-torso,
        .person-5 .person-leg {
          background: #92400e;
        }

        .person-5 {
          top: 70%;
          animation: walkAcross 22s linear infinite;
          animation-delay: -18s;
          opacity: 0.38;
        }

        /* 黒色の人 */
        .person-6 .person-head,
        .person-6 .person-torso,
        .person-6 .person-leg {
          background: #1f2937;
        }

        .person-6 {
          top: 85%;
          animation: walkAcross 35s linear infinite;
          animation-delay: -5s;
          opacity: 0.25;
        }

        /* ピンク色の人 */
        .person-7 .person-head,
        .person-7 .person-torso,
        .person-7 .person-leg {
          background: #ec4899;
        }

        .person-7 {
          top: 20%;
          animation: walkAcross 12s linear infinite;
          animation-delay: -15s;
          opacity: 0.42;
        }

        /* 水色の人 */
        .person-8 .person-head,
        .person-8 .person-torso,
        .person-8 .person-leg {
          background: #0891b2;
        }

        .person-8 {
          top: 65%;
          animation: walkAcross 26s linear infinite;
          animation-delay: -22s;
          opacity: 0.33;
        }

        /* メインコンテンツ */
        .main-content {
          position: relative;
          z-index: 1;
        }

        .section {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .section-room-code,
        .section-title,
        .section-button {
          height: 100px;
        }

        .section-members {
          height: 400px;
        }

        .center-content {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 100%;
        }

        .room-code-text {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a202c;
          text-align: center;
          padding: 16px 32px;
          background: #fed7aa;
          border-radius: 12px;
          border: 2px solid #fdba74;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .user-list-title {
          font-size: 1.375rem;
          font-weight: 600;
          color: #1a202c;
          text-align: center;
          text-shadow: none;
        }

        .members-stack {
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 280px;
          max-height: 350px;
          overflow-y: auto;
          padding: 8px;
        }

        .members-stack::-webkit-scrollbar {
          width: 6px;
        }

        .members-stack::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }

        .members-stack::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
        }

        .member-box {
          width: 100%;
          padding: 18px 24px;
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          color: #1a202c;
          text-align: center;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1.1rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .member-box::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.5s ease;
        }

        .member-box:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }

        .member-box:hover::before {
          left: 100%;
        }

        .start-button {
          background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);
          color: white;
          border: none;
          padding: 16px 48px;
          font-size: 1.125rem;
          font-weight: 600;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
          overflow: hidden;
        }

        .start-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .start-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }

        .start-button:hover::before {
          left: 100%;
        }

        .start-button:active {
          transform: translateY(0);
        }

        /* レスポンシブデザイン */
        @media (max-width: 768px) {
          .matching-container {
            padding: 0 12px;
          }

          .members-stack {
            width: 100%;
            max-width: 320px;
          }

          .room-code-text {
            font-size: 1.25rem;
            padding: 12px 20px;
          }

          .section-room-code,
          .section-title,
          .section-button {
            height: 80px;
          }

          .section-members {
            height: 350px;
          }

          .walking-person {
            width: 40px;
            height: 60px;
          }

          .person-head {
            width: 15px;
            height: 15px;
          }

          .person-torso {
            width: 20px;
            height: 25px;
          }

          .person-leg {
            width: 6px;
            height: 15px;
          }
        }

        @media (max-width: 480px) {
          .room-code-text {
            font-size: 1rem;
            padding: 10px 16px;
          }

          .member-box {
            padding: 14px 18px;
            font-size: 1rem;
          }

          .start-button {
            padding: 12px 32px;
            font-size: 1rem;
          }

          .user-list-title {
            font-size: 1.25rem;
          }

          .walking-person {
            width: 35px;
            height: 50px;
          }
        }
      `}</style>

      {/* 歩いている人のアニメーション背景 */}
      <div className="walking-background">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
          <div key={num} className={`walking-person person-${num}`}>
            <div className="person-body">
              <div className="person-head"></div>
              <div className="person-torso"></div>
              <div className="person-legs">
                <div className="person-leg left"></div>
                <div className="person-leg right"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* メインコンテンツ */}
      <div className="main-content">
        <div className="section section-room-code">
          <div className="center-content">
            <div className="room-code-text">部屋のあいことば: {roomName}</div>
          </div>
        </div>

        <div className="section section-title">
          <div className="center-content">
            <div className="user-list-title">ユーザー一覧</div>
          </div>
        </div>

        <div className="section section-members">
          <div className="center-content">
            <div className="members-stack">
              {members.map((member, index) => (
                <div key={index} className="member-box">
                  {member}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section section-button">
          <div className="center-content">
            <button className="start-button" onClick={onClick}>
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Matching
