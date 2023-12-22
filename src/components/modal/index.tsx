type ModalType = {
  children: React.ReactNode;
  onClose: Function;
};

export default function Modal({ children, onClose }: ModalType) {

  const handleClose = () => {
    console.log("CLSOE MODAL")
    onClose()
  }
  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm text-white flex justify-center items-center h-full"
    >
      {children}
    </div>
  );
}
