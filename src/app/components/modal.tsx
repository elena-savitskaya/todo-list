interface ModalProps {
  message: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export const Modal = ({ message, onCancel, onConfirm }: ModalProps) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onConfirm}>Confirm</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};
