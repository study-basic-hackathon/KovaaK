export function createRoomId() {
    const chars = '0123456789';
    const length = 5
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

export async function createUniqueRoomId() {
    let roomId = '';
    let exists = true;
    // ルームIDが既存でないものが生成されるまで繰り返す
    while (exists) {
        roomId = createRoomId();
        try {
            const res = await fetch("/api/room/exists", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ roomName: roomId }),
            });
            if (res.status === 200) {
                const { occupied } = await res.json();
                exists = occupied;
            } else {
                exists = false;
            }
        } catch (e) {
            exists = false;
        }
    }
    return roomId;
}