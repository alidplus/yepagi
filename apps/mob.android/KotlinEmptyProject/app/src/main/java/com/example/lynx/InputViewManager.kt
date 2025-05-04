package com.example.lynx

import android.text.Editable
import android.text.TextWatcher
import android.widget.EditText
import com.lynx.core.base.LynxComponentViewManager
import com.lynx.core.communications.LynxComponents
import com.lynx.core.communications.LynxProps

@LynxComponents("Input")
class InputViewManager : LynxComponentViewManager<EditText>() {
    override fun createView(): EditText {
        return EditText(context)
    }

    override fun updateProps(view: EditText, props: LynxProps) {
        props.getString("placeholder")?.let { view.hint = it }
        props.getString("value")?.let { view.setText(it) }
        props.getBoolean("secureTextEntry")?.let { view.inputType = if (it) 129 else 1 }
        
        view.addTextChangedListener(object : TextWatcher {
            override fun beforeTextChanged(s: CharSequence?, start: Int, count: Int, after: Int) {}
            override fun onTextChanged(s: CharSequence?, start: Int, before: Int, count: Int) {}
            override fun afterTextChanged(s: Editable?) {
                s?.toString()?.let { text ->
                    emitEvent("onChangeText", text)
                }
            }
        })
    }
}