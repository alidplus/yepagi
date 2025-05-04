import UIKit
import LynxKit

@objc(InputViewManager)
class InputViewManager: LYNComponentViewManager {
    override class func componentName() -> String {
        return "Input"
    }
    
    override func createView() -> UIView {
        let textField = UITextField()
        textField.borderStyle = .roundedRect
        textField.addTarget(self, action: #selector(textFieldDidChange(_:)), for: .editingChanged)
        return textField
    }
    
    override func updateView(_ view: UIView, props: LYNProps) {
        guard let textField = view as? UITextField else { return }
        
        if let placeholder = props.string(forKey: "placeholder") {
            textField.placeholder = placeholder
        }
        
        if let value = props.string(forKey: "value") {
            textField.text = value
        }
        
        if let isSecure = props.bool(forKey: "secureTextEntry") {
            textField.isSecureTextEntry = isSecure
        }
    }
    
    @objc private func textFieldDidChange(_ textField: UITextField) {
        emit("onChangeText", withValue: textField.text ?? "")
    }
}