package sk.thenoen.localnotices.localnoticesserver.controller;


import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import sk.thenoen.localnotices.localnoticesserver.model.Notice;

@RestController()
@RequestMapping("/notice")
public class NoticeController {

	@RequestMapping("/list")
	public String list(@RequestParam(value = "name", required = false) String name) {
		return "Hello " + name + "!";
	}

	@RequestMapping(value = "/createNotice", method = RequestMethod.POST, produces = {MediaType.TEXT_PLAIN_VALUE})
	public String createNotice(@RequestBody Notice notice) {
		return "Create notice: \"" + notice.getText() + "\" - validity: " + notice.getValidFrom() + " - " + notice.getValidUntil();
	}
}
