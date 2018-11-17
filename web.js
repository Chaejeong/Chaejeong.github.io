WebView browser = (WebView)findViewById(/*WebView의 ID*/);
browser.getSettings().setJavaScriptEnabled(true);  //javascript 사용 가능하게 한다
final Context myApp = this;
 
browser.setWebChromeClient(new WebChromeClient() {
    @Override
    public boolean onJsAlert(WebView view, String url, String message, final android.webkit.JsResult result)
    {
        new AlertDialog.Builder(myApp)
            .setTitle("AlertDialog")
            .setMessage(message)
            .setPositiveButton(android.R.string.ok,
                    new AlertDialog.OnClickListener()
                    {
                        public void onClick(DialogInterface dialog, int which)
                        {
                            result.confirm();
                        }
                    })
            .setCancelable(false)
            .create()
            .show();
 
        return true;
    };
});
 
browser.loadUrl(/*웹 페이지 주소*/);