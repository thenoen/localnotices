package sk.thenoen.localnotices.localnoticesserver.controller;


import java.util.HashMap;
import java.util.Map;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import sk.thenoen.localnotices.localnoticesserver.model.Notice;

@RestController()
@RequestMapping("/notice")
public class NoticeController {

	@RequestMapping("/list")
	public Map<String, Object> list(@RequestParam(value = "name", required = false) String name) {
		Map<String, Object> response = new HashMap<>();
		response.put("success", true);
		return response;
		// return "Hello " + name + "!";
	}

	@RequestMapping(value = "/createNotice", method = RequestMethod.POST, produces = {MediaType.TEXT_PLAIN_VALUE})
	public String createNotice(@RequestBody Notice notice) {
		return "Create notice: \"" + notice.getText() + "\" - validity: " + notice.getValidFrom() + " - " + notice.getValidUntil();
	}
}
