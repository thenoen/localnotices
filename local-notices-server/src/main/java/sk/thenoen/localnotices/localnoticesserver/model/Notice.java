package sk.thenoen.localnotices.localnoticesserver.model;

import java.time.LocalDateTime;

public class Notice {

	LocalDateTime validFrom;
	LocalDateTime validUntil;
	String text;

	public LocalDateTime getValidFrom() {
		return validFrom;
	}

	public void setValidFrom(LocalDateTime validFrom) {
		this.validFrom = validFrom;
	}

	public LocalDateTime getValidUntil() {
		return validUntil;
	}

	public void setValidUntil(LocalDateTime validUntil) {
		this.validUntil = validUntil;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}
}
