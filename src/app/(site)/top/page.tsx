"use client"
import { type FC, useState } from "react"
import RoomCreateForm from "./components/room-create-form"
import RoomJoinForm from "./components/room-join-form"

const Top: FC = () => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [isJoinDialogOpen, setIsJoinDialogOpen] = useState(false)

  return (
    <div className="app-container">
      {/* IceBreakerロゴ */}
      <div className="icebreaker-logo-bg">
        <div className="icebreaker-logo">
          <div className="logo">
            <div className="logo-icon big">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                  fill="white"
                />
              </svg>
            </div>
            <h1 className="logo-text big">
              <span className="pink-text">High</span>
              <span className="purple-text">5</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="subtitle">
          みんなで回答を推測しあって、アイスブレイクを楽しみましょう
        </div>

        <div className="action-cards">
          {/* Create Room Card */}
          <div className="action-card">
            <div className="card-icon create-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="white" />
              </svg>
            </div>
            <h3 className="card-title">ルーム作成</h3>
            <p className="card-description">新しいルームを作って、友達を招待しよう！</p>
            <div className="card-detail">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-7.5c0-.83.67-1.5 1.5-1.5S12 9.67 12 10.5V11h2.5c.83 0 1.5.67 1.5 1.5V18h2v-5.5c0-1.1-.9-2-2-2H13v-.5c0-1.93-1.57-3.5-3.5-3.5S6 8.07 6 10v8h-2z"
                  fill="#666"
                />
              </svg>
              <span>最大8人まで参加可能</span>
            </div>
            <button className="action-button create-button" onClick={() => setIsCreateDialogOpen(true)}>
              ルームを作成する
            </button>
          </div>

          {/* Join Room Card */}
          <div className="action-card">
            <div className="card-icon join-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" fill="white" />
              </svg>
            </div>
            <h3 className="card-title">ルーム参加</h3>
            <p className="card-description">友達のルームに参加して、一緒に楽しもう！</p>
            <div className="card-detail">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#666" strokeWidth="2" fill="none" />
              </svg>
              <span>ルームコードで簡単参加</span>
            </div>
            <button className="action-button join-button" onClick={() => setIsJoinDialogOpen(true)}>
              ルームに参加する
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="features">
          <div className="feature">
            <div className="feature-icon heart-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                  fill="#E91E63"
                />
              </svg>
            </div>
            <h4 className="feature-title">楽しいゲーム</h4>
            <p className="feature-description">みんなで楽しめる楽しいゲームがいっぱい</p>
          </div>

          <div className="feature">
            <div className="feature-icon users-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" fill="#2196F3" />
              </svg>
            </div>
            <h4 className="feature-title">新しい出会い</h4>
            <p className="feature-description">自然な会話で素敵なつながりを</p>
          </div>

          <div className="feature">
            <div className="feature-icon bolt-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" fill="#4CAF50" />
              </svg>
            </div>
            <h4 className="feature-title">簡単操作</h4>
            <p className="feature-description">誰でも簡単に始められる</p>
          </div>
        </div>
      </div>

      {/* Create Room Dialog */}
      {isCreateDialogOpen && (
        <div className="dialog-overlay" onClick={() => setIsCreateDialogOpen(false)}>
          <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
            <div className="dialog-header">
              <h2 className="dialog-title">ルーム作成</h2>
              <button className="close-button" onClick={() => setIsCreateDialogOpen(false)}>
                ✕
              </button>
            </div>
            <div className="dialog-body">
              <RoomCreateForm />
            </div>
          </div>
        </div>
      )}

      {/* Join Room Dialog */}
      {isJoinDialogOpen && (
        <div className="dialog-overlay" onClick={() => setIsJoinDialogOpen(false)}>
          <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
            <div className="dialog-header">
              <h2 className="dialog-title">ルーム参加</h2>
              <button className="close-button" onClick={() => setIsJoinDialogOpen(false)}>
                ✕
              </button>
            </div>
            <div className="dialog-body">
              <RoomJoinForm />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .app-container {
          min-height: 100vh;
          background: linear-gradient(120deg, #ffeede 0%, #f7eaff 60%, #f6f0ff 100%);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          padding: 0;
          margin: 0;
          position: relative;
          overflow: hidden;
        }
        .icebreaker-logo-bg {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 38px;
          margin-bottom: 18px;
          position: relative;
        }
        .icebreaker-logo-bg::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 340px;
          height: 90px;
          border-radius: 60px;
          background: linear-gradient(90deg, #ffe0b2 0%, #f7eaff 100%);
          filter: blur(18px) brightness(1.08);
          opacity: 0.38;
          z-index: 0;
        }
        .icebreaker-logo {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
        }
        .logo-icon.big {
          width: 72px;
          height: 72px;
          background: linear-gradient(135deg, #d665e0 0%, #ffb6b9 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 24px rgba(214, 101, 224, 0.18);
        }
        .logo-text.big {
          font-size: 3.1rem;
          font-weight: 900;
          margin: 0;
          letter-spacing: 2px;
          line-height: 1;
        }
        .pink-text {
          color: #e84cbf;
          text-shadow: 0 2px 12px #ffd6e0;
        }
        .purple-text {
          color: #5f6ff3;
          text-shadow: 0 2px 12px #e0e7ff;
        }
        .main-content {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }
        .subtitle {
          text-align: center;
          font-size: 1.25rem;
          color: #6d5cae;
          margin: 18px 0 38px;
          line-height: 1.7;
          font-weight: 600;
          text-shadow: 0 2px 8px #f8e7f8;
        }
        .action-cards {
          display: flex;
          flex-direction: row;
          gap: 32px;
          justify-content: center;
          margin-bottom: 48px;
        }
        .action-card {
          background: linear-gradient(120deg, #fff 60%, #fff7fa 100%);
          border-radius: 18px;
          padding: 38px 18px 32px;
          text-align: center;
          box-shadow: 0 4px 18px rgba(214, 101, 224, 0.10), 0 2px 8px rgba(0,0,0,0.04);
          border: 1.5px solid #f3eaff;
          min-width: 340px;
          max-width: 380px;
        }
        .card-icon.create-icon {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #ff8fa3 0%, #ffb86b 100%);
          margin: 0 auto 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(255, 105, 180, 0.13);
        }
        .card-icon.join-icon {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #a8a4ff 0%, #7fdfff 100%);
          margin: 0 auto 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(105, 180, 255, 0.13);
        }
        .card-title {
          font-size: 1.45rem;
          font-weight: 900;
          color: #222;
          margin: 0 0 10px;
        }
        .card-description {
          font-size: 1.02rem;
          color: #444;
          margin: 0 0 14px;
          line-height: 1.6;
        }
        .card-detail {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 0.98rem;
          color: #a78bfa;
          margin-bottom: 22px;
        }
        .action-button.create-button {
          background: linear-gradient(90deg, #f47cc3 0%, #ffb86b 100%);
          color: #fff;
          font-weight: 700;
          font-size: 1.08rem;
          box-shadow: 0 2px 8px #ffd6e0;
        }
        .action-button.join-button {
          background: linear-gradient(90deg, #6e8fff 0%, #b18fff 100%);
          color: #fff;
          font-weight: 700;
          font-size: 1.08rem;
          box-shadow: 0 2px 8px #e0e7ff;
        }
        .action-button {
          width: 95%;
          min-height: 48px;
          padding: 14px 0;
          border: none;
          border-radius: 18px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(.4,2,.6,1);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .action-button:hover {
          transform: translateY(-2px) scale(1.04);
          box-shadow: 0 8px 24px rgba(214, 101, 224, 0.18);
        }
        .features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-bottom: 44px;
        }
        @media (max-width: 900px) {
          .features {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
        }
        @media (max-width: 600px) {
          .features {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
        .feature {
          background: linear-gradient(120deg, #fff 70%, #e0e7ff 100%);
          border-radius: 20px;
          padding: 32px 18px 28px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(123, 93, 214, 0.13);
          border: 2px solid #e0e7ff;
        }
        .feature-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 18px;
          background: rgba(255, 255, 255, 0.95);
        }
        .heart-icon {
          color: #ff3e8e;
        }
        .users-icon {
          color: #5f3dc4;
        }
        .bolt-icon {
          color: #ffd600;
        }
        .feature-title {
          font-size: 1.18rem;
          font-weight: 900;
          color: #5f3dc4;
          margin: 0 0 10px;
        }
        .feature-description {
          font-size: 0.98rem;
          color: #444;
          margin: 0;
          line-height: 1.5;
        }
        .dialog-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(4px);
        }
        .dialog-content {
          background: white;
          border-radius: 22px;
          max-width: 500px;
          width: 92%;
          max-height: 80vh;
          overflow: auto;
          box-shadow: 0 20px 60px rgba(123, 93, 214, 0.18);
        }
        .dialog-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 26px 26px 0;
        }
        .dialog-title {
          font-size: 1.55rem;
          font-weight: 800;
          color: #7b5dd6;
          margin: 0;
        }
        .close-button {
          background: #f5f5f5;
          border: none;
          border-radius: 50%;
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #666;
          font-size: 1.1rem;
          transition: all 0.2s ease;
        }
        .close-button:hover {
          background: #e0e0e0;
        }
        .dialog-body {
          padding: 26px;
        }
        @media (max-width: 900px) {
          .main-content {
            max-width: 100vw;
          }
          .action-cards {
            flex-direction: column;
            gap: 24px;
            align-items: center;
          }
          .action-card {
            min-width: 0;
            width: 100%;
            max-width: 420px;
          }
        }
      `}</style>
    </div>
  )
}

export default Top
