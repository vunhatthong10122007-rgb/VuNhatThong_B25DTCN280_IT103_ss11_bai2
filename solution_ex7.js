let devices = [
  { id: "DEV_001", name: "Đèn trần", room: "LivingRoom", powerWatts: 40, isActive: true },
  { id: "DEV_002", name: "Máy lạnh", room: "LivingRoom", powerWatts: 1500, isActive: false },
  { id: "DEV_003", name: "Đèn ngủ", room: "BedRoom", powerWatts: 15, isActive: true }
];

let idCounter = 4;

const createDevice = (list, newDev) => {
  if (!newDev.name || !newDev.room || newDev.powerWatts <= 0) {
    console.log("Lỗi: Thông tin thiết bị không hợp lệ!");
    return null;
  }

  const item = {
    id: "DEV_00" + idCounter++,
    name: newDev.name,
    room: newDev.room,
    powerWatts: newDev.powerWatts,
    isActive: Boolean(newDev.isActive)
  };

  list.push(item);
  console.log("Đã thêm:", item.id, item.name);
  return item;
};

const readDevicesByRoom = (list, roomName) => {
  return list.filter(d => d.room === roomName);
};

const updateDevice = (list, id, updateData) => {
  const dev = list.find(d => d.id === id);
  if (!dev) {
    console.log("Không tìm thấy mã:", id);
    return false;
  }

  if (updateData.name !== undefined) dev.name = updateData.name;
  if (updateData.room !== undefined) dev.room = updateData.room;
  if (updateData.isActive !== undefined) dev.isActive = updateData.isActive;
  if (updateData.powerWatts !== undefined) dev.powerWatts = updateData.powerWatts;

  console.log("Cập nhật thành công:", id);
  return true;
};

const deleteDevice = (list, id) => {
  const index = list.findIndex(d => d.id === id);
  if (index === -1) {
    console.log("Xóa thất bại, không có mã:", id);
    return false;
  }

  list.splice(index, 1);
  console.log("Đã gỡ thiết bị:", id);
  return true;
};


createDevice(devices, { name: "Quạt cây", room: "LivingRoom", powerWatts: 55, isActive: true });
createDevice(devices, { name: "Bóng hỏng", room: "Kitchen", powerWatts: -10 });

console.log("\nThiết bị phòng LivingRoom:");
const living = readDevicesByRoom(devices, "LivingRoom");
for (let i = 0; i < living.length; i++) {
  console.log("-", living[i].id, living[i].name, living[i].powerWatts + "W", living[i].isActive ? "Bật" : "Tắt");
}

console.log("\nThử update DEV_001:");
updateDevice(devices, "DEV_001", { isActive: false, powerWatts: 0 });

// Thử xóa
console.log("\nThử xóa DEV_002:");
deleteDevice(devices, "DEV_002");
deleteDevice(devices, "DEV_999"); 

console.log("\nDanh sách cuối cùng:");
for (let i = 0; i < devices.length; i++) {
  let d = devices[i];
  console.log(d.id, "|", d.name, "|", d.room, "|", d.powerWatts + "W", "|", d.isActive ? "ON" : "OFF");
}